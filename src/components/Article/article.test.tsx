import React from 'react';
import { queryByText, render } from '@testing-library/react';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import { sampleArticle } from "utils/sample"
import Article from './index';

const article = sampleArticle();
article.content = "Content"
article.description = "Description"


describe('Article Component', () => {
    it('should show an article in mode fullscreen', () => {
        const { getByText } = render(<Article article={article} fullscreen={true} />)

        expect(getByText(/Content/i)).toBeVisible();  
    });
    
    
    it('should show an article in mode reduced', () => {        
        const { getByText } = render(<Article article={article} fullscreen={false} />)

        expect(getByText(/Content/i)).not.toBeVisible();  
        expect(getByText(/Content/i)).not.toBeVisible();  
    });
})