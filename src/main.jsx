import React from 'react'
import { Provider } from 'react-redux';
import { store } from './app/store';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from "axios";

axios.defaults.withCredentials = true;

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
