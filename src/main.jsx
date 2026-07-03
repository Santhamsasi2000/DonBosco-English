import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import Contact from './Pages/Contact.jsx'
import HeroSection from './Home/HeroSection.jsx'
import HeroContact from './Contact/HeroContact.jsx'
import Footer from './Common/Footer/Footer.jsx'
import AdmissionCTA from './Home/AdmissionCTA.jsx'
import NavBar from './Common/Navbar/NavBar.jsx'
// import OnlineAdmission from './Admission/OnlineAdmission.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
