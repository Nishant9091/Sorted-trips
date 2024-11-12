import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/3.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
    <Navbar/>
    <Hero cName="hero-mid" heroImg={AboutImg} title="Contact us" btnClass="hide"/>
    <Footer/>
    </>
    
  );
}

export default Contact;
