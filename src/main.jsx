import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { MealProvider } from './contexts/meal-context';
import { SearchProvider } from './contexts/search-context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MealProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </MealProvider>
    </BrowserRouter>
  </React.StrictMode>
);
