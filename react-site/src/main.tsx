import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/*
* The `App` component will be rendered in any element with a `data-root` attribute.
* The `data-props` attribute will be handed down to the `App` component if available,
* allowing additional sharing of state from the container to the child micro frontend.
*
*   <div data-root data-props='{"foo": "bar"}'></div>
*
* */
const elements = document.querySelectorAll('[data-root]')

elements.forEach(element => {
  const propsJson = element.getAttribute('data-props')
  const props = propsJson ? JSON.parse(propsJson) : {}

  createRoot(element).render(
    <div className="react">
      <App props={props}/>
    </div>
  )
})
