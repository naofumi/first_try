import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "https://apache.castle104.com/assets/micro-frontend-demo/javascript/turbo-8.0.12-esm.js"

createRoot(document.getElementById('root')).render(
    <App />
)
