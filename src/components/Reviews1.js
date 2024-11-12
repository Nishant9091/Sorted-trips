import React from "react";
import "./Reviews1.css";

import ReviewData from "./ReviewData";

function Reviews1() {
  return (
    <div className="trip">
      <h2>Reviews</h2>
      <p></p>
      <div className="tripcard">
        <ReviewData
          videoUrl="https://www.youtube.com/embed/rBoYIDWghZc"
          heading="Trip in Indonesia "
          star="★★★★★"
          text="There are numerous benefits to travelling if we think about it. The first one being, we get to meet new people. When you meet new people, you get the opportunity to make new friends. It may be a fellow traveller or the local you asked for directions"
        />
        <ReviewData
          videoUrl="https://www.youtube.com/embed/arNcqmgXPqc"
          heading="Trip in Indonesia "
          star="★★★★★"
          text="There are numerous benefits to travelling if we think about it. The first one being, we get to meet new people. When you meet new people, you get the opportunity to make new friends. It may be a fellow traveller or the local you asked for directions"
        />
        <ReviewData
          videoUrl="https://www.youtube.com/embed/35npVaFGHMY"
          heading="Trip in Indonesia "
          star="★★★★★"
          text="There are numerous benefits to travelling if we think about it. The first one being, we get to meet new people. When you meet new people, you get the opportunity to make new friends. It may be a fellow traveller or the local you asked for directions"
        />
      </div>
    </div>
  );
}

export default Reviews1;
