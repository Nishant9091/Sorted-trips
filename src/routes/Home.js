import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/12.jpg";
import Trip from "../components/Trip";
import BigTrips from "../components/BigTrips";
import WhyUs from "../components/WhyUs";
import Blog from "../components/Blog";
import Faq from "../components/Faq";
import InstaReels from "../components/InstaReels";
import TripDetails from "../components/tripdetails";
import Reviews1 from "../components/Reviews1";
import ItenaryTabDetails from "../components/ItenaryTabDetails";

function Home() {
  return (
    <>
      <Navbar />  
      <InstaReels />
     
<section id="about">
      <Destination />
      </section>
   
      <section id="upComig_trips" style={{padding:"30px"}}>
      <TripDetails/>
      </section>
      <Reviews1/>
      <WhyUs />
     

      <Faq />
  
      <Footer />
    </>
  );
}

export default Home;
