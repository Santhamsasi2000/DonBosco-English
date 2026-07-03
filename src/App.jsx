import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Common/Navbar/Header'
import NavBar from './Common/Navbar/NavBar'
import Home from './Pages/Home'
import Footer from './Common/Footer/Footer'
import Contact from './Pages/Contact'
import AboutUs from './About/AboutUs'

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
