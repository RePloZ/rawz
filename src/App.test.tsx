import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history'

import '@testing-library/jest-dom/extend-expect'
import { setArticles } from 'features/category/categorySlice';
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
    const history = createMemoryHistory()

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    )
  
    expect(getByText(/catégorie/i)).toBeInTheDocument()
  })

  xit('should render an article properly', () => {
    const history = createMemoryHistory()

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    )

    const articles = new Array(5).fill("").map(() => sampleArticle())
    setArticles(articles);
    
    history.push(`/article/${articles[0]._id}`);

    expect(getByText(/Titre/i)).toBeInTheDocument();
  })
})