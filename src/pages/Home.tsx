import "./Home.css";
import Hero from "../components/hero/Hero";
import Contact from "../components/contact/Contact";

function Home(){
  return(
    <main className="home-page">
      <Hero/>
      <Contact/>
    </main>
  );
}

export default Home;