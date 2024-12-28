import {useEffect} from "react"
import {loadRemoteAssets} from "../manifest-reader.js"

const viteReactHost = import.meta.env.VITE_REACT_HOST

export default function DetailPage() {
  useEffect(() => {
    loadRemoteAssets({
      manifestUrl: `${viteReactHost}/.vite/manifest.json`
    })
  }, [])
  return <div>
    <h1>React Detail Page</h1>
    <div className="react-container">
      <div id="root-react"></div>
    </div>
  </div>
}
