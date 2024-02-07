import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import { Favorite } from './pages/FavoritePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/favorite',
    element: <Favorite />
  }
]);

const root = document.getElementById('root');

if (!root) {
  throw new Error('root tag is not defined');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
