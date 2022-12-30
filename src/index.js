import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore } from 'redux';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
