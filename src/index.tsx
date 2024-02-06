import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import './styles/index.scss';
import { VacancyPage } from './pages/VacancyPage';
import { Provider } from 'react-redux';
import { store } from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/vacancy',
    element: <VacancyPage />
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
