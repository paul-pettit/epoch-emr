import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Auth from './Auth';

createRoot(document.getElementById("root")!).render(
  <Auth>
    <App />
  </Auth>
);
