import "./TripStyles.css";


function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">

      <video width="320" height="240" controls>
      <source src="https://youtu.be/ysynaVNKr0I" type=""/>
      Your browser does not support the video tag.
      </video>

        {/* <img src={props.image} alt="image"/> */}
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default TripData;
