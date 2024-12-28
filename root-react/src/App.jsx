import './App.css'
import IndexPage from "./pages/IndexPage.jsx"
import DetailPage from "./pages/DetailPage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import {useEffect, useState} from "react"

// eslint-disable-next-line react/prop-types
function Route({path}) {
  if (path === "/") {
    return <IndexPage/>
  } else if (path === "/detail") {
    return <DetailPage/>
  } else if (path === "/about.html") {
    return <AboutPage/>
  }
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 10)
  }, [])

  return (
    <div data-turbo="false">
      <Route path={window.location.pathname}/>
      <div className={loading
                      ? "loading__in_progress"
                      : "loading__finished"}></div>
    </div>
  )
}

export default App
