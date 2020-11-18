import React from 'react';
import { getAllByText, render } from '@testing-library/react';
import { createMemoryHistory } from "history"
import ArticleList from "./index"
import { Provider } from "react-redux"
import { sampleArticle } from "utils/sample"
import { setArticles } from "../newsSlice"
import { store } from 'app/store';
import { Router } from 'react-router-dom';

describe('Article List', () => {
    it('should render the articles', () => {
        const history = createMemoryHistory()

        const articles = [sampleArticle(), sampleArticle(), sampleArticle()]
        store.dispatch(setArticles(articles))

        const { getAllByText } = render(<Provider store={store}>
            <Router history={history}>
                <ArticleList />
            </Router>
        </Provider>)

        expect(getAllByText(/Titre/i)[0]).toBeInTheDocument();
    })
})