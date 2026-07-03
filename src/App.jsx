import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Common/Navbar/Header'
import NavBar from './Common/Navbar/NavBar'
import Home from './Pages/Home'
import Footer from './Common/Footer/Footer'
import Contact from './Pages/Contact'
import AboutUs from './About/AboutUs'
import TeachingFaculty from './About/TeachingFaculty'

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* About Us */}
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/about/faculty' element={<TeachingFaculty />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
