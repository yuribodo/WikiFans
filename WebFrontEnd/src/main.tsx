import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import DetalhesPersonagem from './DetalhesPersonagem.tsx';

const router = createBrowserRouter([
  {
    path: "https://yuribodo.github.io/WikiFans/",
    element: <App />,
  },
  {
    path: "WikiFans/",
    element: <App />,
  },
  {
    path: 'https://yuribodo.github.io/WikiFans/personagem/:name',
    element: <DetalhesPersonagem />
  },
  {
    path: 'WikiFans/personagem/:name',
    element: <DetalhesPersonagem />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
