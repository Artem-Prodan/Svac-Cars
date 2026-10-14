import { BrowserRouter, Routes, Route } from 'react-router';

import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {

  return (
   <BrowserRouter>
    <Header/>

    <main className="app-main">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </main>
    
    <Footer/>
   </BrowserRouter>
  )
}

export default App
