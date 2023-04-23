import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Tours from "./components/Tours";

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Tours/>
    <Footer/>
    </>
  );
}

export default App;
