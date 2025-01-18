import {useEffect} from "react"
import {loadRemoteAssets} from "../manifest-reader.js"

const viteReactHost = import.meta.env.VITE_REACT_HOST

export default function JewelryPage() {
  useEffect(() => {
    loadRemoteAssets({
      manifestUrl: `${viteReactHost}/.vite/manifest.json`
    })
  }, [])

  return <div>
    <div data-microfrontend-name="react-site"></div>
  </div>
}
