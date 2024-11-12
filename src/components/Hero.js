import "./HeroStyles.css";
import HomeImg1 from "../assets/Trips/Trip1.jpg";
import HomeImg2 from "../assets/Trips/Trip2.jpg";
import HomeImg3 from "../assets/Trips/Trip3.jpg";

//items after navbar
function Hero(props) {
  return (
    <> 
      <div class="hero">
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="3000">
        <img src={HomeImg1} class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src={HomeImg2} class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src={HomeImg3} class="d-block w-100" alt="..." />
      </div>
    </div>
  </div>
  <div class="hero-text">
    <h1>{props.title}</h1>
    <p>{props.text}</p>
    <a href={props.url} class={props.btnClass}>
      {props.buttonText}
    </a>
  </div>
</div>



    </>
  );
}

export default Hero;