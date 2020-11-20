import React from 'react';
import { render } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import { store } from 'app/store';
import App from 'view/App';
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history'

import '@testing-library/jest-dom/extend-expect'
import { setArticles } from 'features/news/newsSlice';
import { CATEGORIES } from 'app/constants';
import { sampleArticle } from 'utils/sample';

describe('Application', () => {
  it('should render without problem', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  
    expect(getByText(/Accueil/i)).toBeInTheDocument();  
  })

  it('should render Application and navigate correctly', () => {
    const history = createMemoryHistory();

    const articles = new Array(10).fill(" ").map(() => sampleArticle());
    articles[0].content = "content";
    store.dispatch(setArticles(articles));

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    )
  
    //Articles => 
    const { news } = store.getState();
    expect(news.articles).not.toEqual([]);

    expect(getByText(/content/i)).not.toBeVisible();
  })
})