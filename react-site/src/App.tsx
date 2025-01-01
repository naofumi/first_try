import './App.css'
import IndexPage from "./pages/IndexPage.tsx"
import ListPage from "./pages/ListPage.tsx"
import BuyPage from "./pages/BuyPage.tsx"

function Route({path}: {path: string}) {
  if (path === "/") {
    return <IndexPage />
  } else if (path === "/jewelry") {
    return <ListPage />
  } else if (path.startsWith("/jewelry/buy")) {
    return <BuyPage />
  }
}

export default function App({props}: {props: object | Array<object>}) {
  console.dir(props)

  return (
    <div className="container">
      <div className="micro-frontend-label">Micro Frontend React</div>
      <Route path={window.location.pathname}/>
    </div>
  )
}
