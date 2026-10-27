import { BrowserRouter, Routes, Route } from 'react-router';

import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import ScrollToTop from './components/customHooks/ScrollToTop';
import Questions from './pages/Questions';

import VinCode from './pages/guides/VinCode';
import Pricing from './pages/guides/Pricing';



function App() {

  return (
   <BrowserRouter>
    <ScrollToTop/>

    <Header/>

    <main className="app-main">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contacts/>} />
        <Route path='/questions' element={<Questions/>}/>

        <Route path='/guides/vin-code' element={<VinCode/>}/>
        <Route path='/guides/pricing' element={<Pricing/>}/>
      </Routes>
    </main>

    <Footer/>
   </BrowserRouter>
  )
}

export default App
