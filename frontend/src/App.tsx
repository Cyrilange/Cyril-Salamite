
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './page/Home';
import Minishell from './page/Minishell';
import IrcServ from './page/Ircserv';
import SocialFii42 from './page/SocialFi';
import Footer from './components/Footer';
import Resume from './components/Resume';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Home />
    <Resume />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/minishell" element={<Minishell />} />
      <Route path="/projects/ft_irc" element={<IrcServ />} />
      <Route path="/projects/tokenizers" element={<SocialFii42 />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App