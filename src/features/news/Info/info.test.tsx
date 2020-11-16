import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from "history"
import Info from "./index"
import { Provider } from "react-redux"
import { sampleArticle } from "utils/sample"
import { setArticles } from "../newsSlice"
import { store } from 'app/store';
import { Route, Router } from 'react-router-dom';

describe('Article Information', () => {
    xit('should render the info of the text', () => {
        const history = createMemoryHistory()

        const articles = [sampleArticle()]
        setArticles(articles);

        const route = `/article/${articles[0]._id}`
        history.push(route)

        const { getByText } = render(<Provider store={store}>
            <Router history={history}>
                <Route path="/article/:id">
                    <Info />
                </Route>
            </Router>
        </Provider>)

        expect(getByText(/Title/y)).toBeInTheDocument();
    })
})