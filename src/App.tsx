import { BrowserRouter, Routes, Route } from 'react-router';

import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import ScrollToTop from './components/customHooks/ScrollToTop';


function App() {

  return (
   <BrowserRouter>
    <ScrollToTop/>

    <Header/>

    <main className="app-main">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contacts/>} />
      </Routes>
    </main>

    <Footer/>
   </BrowserRouter>
  )
}

export default App
