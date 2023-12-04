import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0';
import './assets/css/animate.min.css';
import './assets/css/demo.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
