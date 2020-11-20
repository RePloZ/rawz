import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from "react-redux"
import { sampleArticle } from "utils/sample"
import { setArticles } from "features/news/newsSlice"
import { store } from 'app/store';
import ListArticle from 'view/ListArticle';

describe('List Article Component', () => {
    it('should render the information in fullscreen', () => {
        const articles = new Array(5).fill(" ").map(() => sampleArticle())
        articles[0].title = "Titre1";
        articles[1].title = "Titre2";
        articles[2].title = "Titre3";
        articles[3].title = "Titre4";
        store.dispatch(setArticles(articles))

        const { getByText } = render(<Provider store={store}>
            <ListArticle />
        </Provider>)

        expect(getByText(/Titre1/y)).toBeInTheDocument();
        expect(getByText(/Titre2/y)).toBeInTheDocument();
        expect(getByText(/Titre3/y)).toBeInTheDocument();
        expect(getByText(/Titre4/y)).toBeInTheDocument();
    })
})