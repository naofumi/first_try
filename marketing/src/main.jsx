import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const elements = document.querySelectorAll('[data-microfrontend-name=marketing]')

elements.forEach(element => {
  const propsJson = element.getAttribute('data-microfrontend-props')
  const props = propsJson
                ? JSON.parse(propsJson)
                : {}

  createRoot(element).render(
    <StrictMode>
      <div className="marketing">
        <App props={props}/>
      </div>
    </StrictMode>
  )
})
