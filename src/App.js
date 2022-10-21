import './App.css';
import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import ContentSection from './components/ContentSection/ContentSection';
import Testimonials  from './components/Testimonials/Testimonials';
import Community from './components/Community/Community';
import Team from './components/TeamMembers/Team';
import {FaArrowRight} from "react-icons/fa";
import {FaCheckCircle} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import AppStore from './components/AppStore/AppStore';
import News from './components/News/News';
import Footer from './components/FooterSection/Footer';
import FooterBottom from './components/FooterSection/FooterBottom/FooterBottom';

function App() {
  return (
    <div >
      <NavBar />
      <HeroSection/>
      <ContentSection/>
      <Testimonials />
      <Community />
      <Team/>
      <AppStore/>
      <News/>
      <Footer/>
      <FooterBottom/>
    </div>
  );
}

export default App;
