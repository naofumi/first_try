import './App.css'
import IndexPage from "./pages/IndexPage.tsx"
import DetailPage from "./pages/DetailPage.tsx"

function Route({path}: {path: string}) {
  if (path === "/") {
    return <IndexPage />
  } else if (path === "/detail") {
    return <DetailPage />
  }
}

export default function App() {
  return (
    <div className="container">
      <div className="micro-frontend-label">Micro Frontend React</div>
      <Route path={window.location.pathname}/>
    </div>
  )
}
