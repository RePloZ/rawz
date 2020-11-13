import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from "app/store";
import axios from 'axios';
import { v4 as uuid } from "uuid";

export enum CATEGORIES {
    ALL = "",
    BUSINESS = "business",
    ENTERTAINMENT = "entertainment",
    HEALTH = "health",
    SCIENCE = "science",
    SPORTS = "sports",
    TECHNOLOGY = "technology"
}

export interface Article {
    _id: string,
    title : string,
    image : string, 
    description: string,
    auteur: string,
    publishedAt: number,
    content: string,
}

interface CategoryState {
    category: string,
    articles: Article[],
    error: string
}

const initialState: CategoryState = {
    category: "",
    articles: [],
    error: "Veuillez sélectionner une catégorie"
};

export interface IncommingResponse {
    source : {
        id?: string,
        name?: string,
    },
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: number,
    content: string
}

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setArticles: (state, action:PayloadAction<Article[]>) => {
            state.articles = action.payload;
        },
        setError: (state, action:PayloadAction<string>) => {
            state.error = action.payload
        }
    }
})

export const { setArticles, setError } = categorySlice.actions 

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const setAsyncCategory = (category: CATEGORIES): AppThunk => dispatch => {
    const url = `http://newsapi.org/v2/top-headlines?country=fr&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}`;
    axios.get(url)
        .then(response => {
            const articles: Article[] = response.data.articles.map((article: IncommingResponse) => ({
                _id: uuid(),
                title: article.title,
                image: article.urlToImage,
                description: article.description,
                author: article.source.name || "Aucune Source Trouvé",
                publishedAt: article.publishedAt,
                content: article.content
            }))
            dispatch(setArticles(articles));
        })
        .catch(error => {
            console.error(error);
                dispatch(setError("Veuillez insérez votre clé d'API"));
        })
};

export const selectError = (state: RootState) => state.category.error
export const selectArticles = (state: RootState) => state.category.articles

export default categorySlice.reducer;