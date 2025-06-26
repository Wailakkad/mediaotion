import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import './i18n.js' // Importing i18n configuration for translations

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <Router>
      <App />
    </Router>
  </StrictMode>,
)
