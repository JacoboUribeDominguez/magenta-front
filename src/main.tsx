import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import {
  RouterProvider
} from 'react-router-dom';


import router from './router';

import store from './stageManagement/store'

import "./styles/index.scss"

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
