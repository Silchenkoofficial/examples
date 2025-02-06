import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from './hooks/use-store.tsx';
import { store } from './store/rootStore';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider value={store}>
      <App />
    </StoreProvider>
  </StrictMode>
);
