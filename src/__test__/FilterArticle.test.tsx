import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from "history"
import { Provider } from "react-redux"
import { sampleArticle } from "utils/sample"
import { setArticles } from "features/news/newsSlice"
import { store } from 'app/store';
import { Route, Router } from 'react-router-dom';
import FilterArticle from 'view/FilterArticle';

describe('Filter Article Component', () => {
    it('should render the information in fullscreen', () => {
        const history = createMemoryHistory()

        const articles = new Array(5).fill(" ").map(() => sampleArticle())
        articles[0].title = "Titre";
        store.dispatch(setArticles(articles))

        const route = `/article/${articles[0]._id}`
        history.push(route)

        const { getByText } = render(<Provider store={store}>
            <Router history={history}>
                <Route path="/article/:id">
                    <FilterArticle />
                </Route>
            </Router>
        </Provider>)

        expect(getByText(/Titre/y)).toBeInTheDocument();
    })
})