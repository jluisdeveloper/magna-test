import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '../components/App'

createRoot(document.getElementById('root')).render(
  <App 
    typeUser="user"
  />
)

// createRoot(document.body.appendChild(document.createElement('div'))).render(  
//   <App />
// )