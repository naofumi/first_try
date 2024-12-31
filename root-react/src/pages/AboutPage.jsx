import {useEffect} from "react"
import {loadRemoteAssets} from "../manifest-reader.js"

const viteHotwireHost = import.meta.env.VITE_HOTWIRE_HOST
const pathAndQuery = window.location.pathname + window.location.search

export default function AboutPage() {
  useEffect(() => {
    loadRemoteAssets({
      manifestUrl: `${viteHotwireHost}/.vite/manifest.json`
    })
  }, [])
  return <div>
    <turbo-frame src={`${viteHotwireHost}${pathAndQuery}`} id="my-turbo-frame"></turbo-frame>
  </div>
}
