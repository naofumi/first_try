import './App.css'
import IndexPage from "./pages/IndexPage.jsx"
import JewelryPage from "./pages/JewelryPage.jsx"
import RestaurantsPage from "./pages/RestaurantsPage.jsx"

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
    <>
      <div data-turbo="false" id="container">
        <div className="micro-frontend-label">Container Application</div>
        <TopNav/>
        <div style={{marginTop: "32px"}}>
          <Route path={window.location.pathname}/>
        </div>
      </div>
    </>
  )
}

export default App
