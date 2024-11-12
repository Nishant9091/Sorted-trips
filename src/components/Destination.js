import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

//About us

const Destination = () => {
  return (
    <div className="destination">
      <h2>About Us</h2>
    

      <DestinationData
      className="first-des"
      heading="Taal Volcano, Batangas"
      text="There are a lot of reasons to travel. Some people travel for fun while some do it for education purposes. Similarly, others have business reasons to travel. In order to travel, one must first get an idea of their financial situation and then proceed"
      img1={Mountain1}
      img2={Mountain2}
      />
    </div>
  );
};

export default Destination;
