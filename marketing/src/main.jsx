import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const elements = document.querySelectorAll('[data-marketing-root]')

elements.forEach(element => {
  const propsJson = element.getAttribute('data-props')
  const props = propsJson ? JSON.parse(propsJson) : {}

  createRoot(element).render(
    <div className="marketing">
      <App props={props}/>
    </div>
  )
})
