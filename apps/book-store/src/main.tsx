import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import store from './app/store/index'
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Toaster />
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
