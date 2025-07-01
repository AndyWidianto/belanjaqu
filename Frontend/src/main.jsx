import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>,
  </BrowserRouter>
)

if ('serviceWorker' in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js")
      .then((register) => {
        console.log("Berhasil Register Service Worker", register);
      })
      .catch((err) => {
        console.error("Gagal Register Service Worker", err);
      });
  });
} else {
  console.log("Service Worker tidak tersedia");
}
