import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history'

import '@testing-library/jest-dom/extend-expect'
import { setArticles } from 'features/article/articlesSlice';
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

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    )
  
    expect(getByText(/catégorie/i)).toBeInTheDocument()
  })
})