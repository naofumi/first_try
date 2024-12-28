import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root-react')!).render(
  <div className="react">
    <App/>
  </div>
)
