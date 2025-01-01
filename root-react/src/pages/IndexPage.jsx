import '../App.css'
import {useEffect} from "react"
import {loadRemoteAssets} from "../manifest-reader.js"

const viteReactHost = import.meta.env.VITE_REACT_HOST
const viteHotwireHost = import.meta.env.VITE_HOTWIRE_HOST
const viteMarketingHost = import.meta.env.VITE_MARKETING_HOST
const pathAndQuery = window.location.pathname + window.location.search

/*
* This is a container page.
*
* After loading the page, the useEffect function loads the JavaScript and CSS for
* each micro frontend in the `loadRemoteAssets` function.
*
* In the HTML markup for this component,
* you include the HTML elements that the JavaScript will attach to.
*
* In the case of Hotwire, instead of providing an HTML element to attach the JavaScript to,
* you will typically load HTML from the server using Turbo Frames.
*
* */
export default function IndexPage() {
  useEffect(() => {
    loadRemoteAssets({
      manifestUrl: `${viteReactHost}/.vite/manifest.json`
    })
    loadRemoteAssets({
      manifestUrl: `${viteHotwireHost}/.vite/manifest.json`
    })
    loadRemoteAssets({
      manifestUrl: `${viteMarketingHost}/.vite/manifest.json`
    })
  }, [])

  return (
    <>
      <div style={{marginBottom: "32px"}}>
        <div data-marketing-root></div>
      </div>

      <div data-root></div>

      <hr className="horizontal-line"/>

      {/*
      * For Turbo Frames, we send in the same pathAndQuery to the micro frontend as the request.
      * This allows us to share the URL state with minimal configuration.
      * If you want to send additional state, then that can be added here to the Turbo Frame src.
      */}
      <turbo-frame src={`${viteHotwireHost}${pathAndQuery}`}
                   id="my-turbo-frame"></turbo-frame>
    </>
  )
}
