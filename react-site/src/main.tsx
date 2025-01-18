import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/*
* The `App` component will be rendered in any element with a `data-microfrontend-name=react-site` attribute.
* The `data-microfrontend-props` attribute will be handed down to the `App` component if available,
* allowing additional sharing of state from the container to the child micro frontend.
*
*   <div data-microfrontend-name="react-site" data-microfrontend-props='{"foo": "bar"}'></div>
*
* The assumption is that the above HTML element is already present on your page.
* Load this JavaScript using `defer`, just before the end of the <body> tag or similar.
* */
const elements = document.querySelectorAll('[data-microfrontend-name=react-site]')

elements.forEach(element => {
  const propsJson = element.getAttribute('data-microfrontend-props')
  const props = propsJson ? JSON.parse(propsJson) : {}

  createRoot(element).render(
    <div className="react">
      <App props={props}/>
    </div>
  )
})
