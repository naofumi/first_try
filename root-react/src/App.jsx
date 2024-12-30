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
  return (
    <div data-turbo="false" id="container">
      <Route path={window.location.pathname}/>
    </div>
  )
}

export default App
