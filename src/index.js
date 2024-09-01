import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import NotesPage from './routes/NotesPage';
import LoginPage from './routes/LoginPage';
import RequireAuth from './components/RequireAuth';
import SignupPage from './routes/SignupPage';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: (
          <RequireAuth>
            <NotesPage />
          </RequireAuth>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
]);


root.render(
  <RouterProvider router={router} />
);