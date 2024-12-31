import '../App.css'
import {useEffect} from "react"
import {loadRemoteAssets} from "../manifest-reader.js"

const viteReactHost = import.meta.env.VITE_REACT_HOST
const viteHotwireHost = import.meta.env.VITE_HOTWIRE_HOST
const pathAndQuery = window.location.pathname + window.location.search

export default function IndexPage() {
  useEffect(() => {
    loadRemoteAssets({
      manifestUrl: `${viteReactHost}/.vite/manifest.json`
    })
    loadRemoteAssets({
      manifestUrl: `${viteHotwireHost}/.vite/manifest.json`
    })
  }, [])

  return (
    <>
      <div data-root></div>

      <hr className="horizontal-line"/>

      <turbo-frame src={`${viteHotwireHost}${pathAndQuery}`}
                   id="my-turbo-frame"></turbo-frame>
    </>
  )
}
