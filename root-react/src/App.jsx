import './App.css'
import IndexPage from "./pages/IndexPage.jsx"
import DetailPage from "./pages/DetailPage.jsx"
import AboutPage from "./pages/AboutPage.jsx"

// eslint-disable-next-line react/prop-types
function Route({path}) {
  if (path === "/") {
    return <IndexPage/>
  } else if (path === "/detail" || path.startsWith("/jewelry/buy")) {
    return <DetailPage/>
  } else if (path === "/about.html") {
    return <AboutPage/>
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
      <a href="/detail">Jewelry</a>
      <a href="/about">Restaurants</a>
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
