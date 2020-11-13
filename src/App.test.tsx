import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom/extend-expect'

test('Render without any problem', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Accueil/i)).toBeInTheDocument();
});

test('Application rendering/navigating correctly', () => {
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