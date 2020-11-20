import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import Menu from '.'
import { store } from 'app/store';

describe('Menu', () => {
    it('should fire the thunk', () => {

        const { getByText } = render(<Provider store={store}>
            <Menu />
        </Provider>)

        fireEvent.click(getByText(/Accueil/i));
        
        const { news } = store.getState();

        expect(news.articles).not.toBe([])
    })
})