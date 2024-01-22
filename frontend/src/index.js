import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'
// import { AuthContextProvider } from './context/authContext';
// import '/public/bootstrap.min.css'

const root = document.getElementById('root')
createRoot(root).render(
  <React.StrictMode>

      <App />

  </React.StrictMode>
)
