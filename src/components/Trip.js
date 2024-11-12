import React from "react";
import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
import TripData2 from "./TripData2";

function Trip() {
  return (
    <div className="trip">
      <h2>Reviews</h2>
      <p></p>
      <div className="tripcard">
        <TripData2
          videoUrl="https://www.youtube.com/embed/rBoYIDWghZc"
          heading="Trip in Indonesia "
          star="★★★★★"
          text="There are numerous benefits to travelling if we think about it. The first one being, we get to meet new people. When you meet new people, you get the opportunity to make new friends. It may be a fellow traveller or the local you asked for directions"
        />
        <TripData2
          videoUrl="https://www.youtube.com/embed/arNcqmgXPqc"
          heading="Trip in Indonesia "
          star="★★★★★"
          text="There are numerous benefits to travelling if we think about it. The first one being, we get to meet new people. When you meet new people, you get the opportunity to make new friends. It may be a fellow traveller or the local you asked for directions"
        />
        <TripData2
          videoUrl="https://www.youtube.com/embed/35npVaFGHMY"
          heading="Trip in Indonesia "
          star="★★★★★"
          text="There are numerous benefits to travelling if we think about it. The first one being, we get to meet new people. When you meet new people, you get the opportunity to make new friends. It may be a fellow traveller or the local you asked for directions"
        />
      </div>
    </div>
  );
}

export default Trip;
