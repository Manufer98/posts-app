import React from 'react';
import ReactDOM from 'react-dom/client';

import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import App from './App';
import store from './components/redux/store';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Auth0Provider domain='dev-y0n3jbi6.us.auth0.com' clientId='oCyyUItcq0HhlFaXrWtIUb366qu8XFvn' redirectUri={window.location.origin}>
    <Provider store={store}>
    
    <App />
    </Provider>
     </Auth0Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
