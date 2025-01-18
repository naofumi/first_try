import './App.css'
import IndexPage from "./pages/IndexPage.jsx"
import JewelryPage from "./pages/JewelryPage.jsx"
import RestaurantsPage from "./pages/RestaurantsPage.jsx"
import {StrictMode} from "react"

/*
* This is a basic router for the container application.
*
* Whenever you want to add a new micro frontend, you register the URL path here
* and the component that serves as the container.
*
* */
function Route({path}) {
  if (path === "/") {
    return <IndexPage/>
  } else if (path === "/jewelry" || path.startsWith("/jewelry/buy")) {
    return <JewelryPage/>
  } else if (path === "/restaurants.html") {
    return <RestaurantsPage/>
  }
}

function TopNav() {
  return <>
    <a href="/">
      <img src="https://apache.castle104.com/assets/micro-frontend-demo/images/logo.webp"
           className="logo" alt="MF Trading Co."/>
    </a>
    <nav className="top-nav">
      <a href="/">Home</a>
      <a href="/jewelry">Jewelry</a>
      <a href="/restaurants.html">Restaurants</a>
    </nav>
  </>
}

function App() {
  return (
    <StrictMode>
      <div data-turbo="false" id="container">
        <div className="micro-frontend-label">Container Application</div>
        <TopNav/>
        <div style={{marginTop: "32px"}}>
          <Route path={window.location.pathname}/>
        </div>
      </div>
    </StrictMode>
  )
}

export default App
