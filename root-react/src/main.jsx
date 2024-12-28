import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@hotwired/turbo"

createRoot(document.getElementById('root')).render(
    <App />
)
