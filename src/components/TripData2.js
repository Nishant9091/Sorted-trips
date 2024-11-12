import React, { useState } from "react";

const TripData2 = ({ videoUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="video-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <iframe
        style={{ borderRadius: "16px"  ,border: "none"}}
        width="298"
        height="530"
        title="YouTube Video"
        src={isHovered ? `${videoUrl}` : videoUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default TripData2;
  