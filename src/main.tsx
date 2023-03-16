import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from 'react-router-dom';
import router from './router';

import "./styles/index.css"

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";    

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
