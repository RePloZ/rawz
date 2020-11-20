import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CATEGORIES, ENDPOINT_API } from 'app/constants';
import { AppThunk, RootState } from "app/store";
import axios from 'axios';
import { v4 as uuid } from "uuid";
export interface Information {
    _id: string,
    title : string,
    image : string, 
    description: string,
    auteur: string,
    publishedAt: number,
    content: string,
}

interface CategoryState {
    articles: Information[],
    message: string
}

const initialState: CategoryState = {
    articles: [],
    message: "Veuillez sélectionner une catégorie"
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
        setArticles: (state, action:PayloadAction<Information[]>) => {
            state.articles = action.payload;
        },
        setMessage: (state, action:PayloadAction<string>) => {
            state.message = action.payload
        }
    }
})

export const { setArticles, setMessage } = categorySlice.actions 

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchNewsByCategory = (category : CATEGORIES = CATEGORIES.ALL): AppThunk => dispatch => {
    //Clear all articles
    setArticles([]);

    axios.get(ENDPOINT_API(category))
        .then(response => {
            const articles: Information[] = response.data.articles.map((article: IncommingResponse) => ({
                _id: uuid(),
                title: article.title,
                image: article.urlToImage,
                description: article.description,
                author: article.source.name || "Aucune Source",
                publishedAt: article.publishedAt,
                content: article.content
            }))
            dispatch(setArticles(articles));
        })
        .catch(error => {
            console.error(error);
                dispatch(setMessage("Veuillez insérez votre clé d'API"));
        })
};

export const selectMessage = (state: RootState) => state.news.message
export const selectArticles = (state: RootState) => state.news.articles

export default categorySlice.reducer;