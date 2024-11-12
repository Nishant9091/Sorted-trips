import React, { useEffect, useState } from "react";
import TripData2 from "./TripData2";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-scroll";

function InstaReels() {
  const [reels, setReels] = useState({ data: [] });
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const Api_url =
    "https://graph.instagram.com/me/media?fields=media_url,media_type&access_token=IGQWRPWGNPUnRJcTJ6Vjh1UWl4dWRBWThId3JTWXZA5MEVYNVY2SEd2ZATRkbmZAST3ZAydTBxLU1iclZAkTWY5eGtEcFhRdzd3cGpiVzE3VU9zRl8wdkFlOVJwVjhWMjZA2R2w2czY3UzVZATEExcXdUSGgwT3E3QThBTVkZD";

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2560, min: 1024 },
      items: 3.8
    },
    desktop: {
      breakpoint: { max: 1024, min: 770 },
      items: 3.3,
    },
    tablet: {
      breakpoint: { max: 770, min: 464 },
      items: 2.3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(Api_url);
        const data = await res.json();
        setReels(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleVideoHover = (index) => {
    setActiveVideoIndex(index);
  };


  // const videoReels = reels.data.filter((item) => item.media_type === "VIDEO");

  return (
    <div className="trip" style={{ paddingTop: "6rem" }}>
      <Carousel responsive={responsive} arrows={true}>
        {reels && reels.data && reels.data.length > 0 ? (
          reels.data
            .filter((item) => item.media_type === "VIDEO")
            .slice(0, 14)
            .map((item, index) => (
              <div
                className="insta_reels"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  margin: "10px",
                }}
                key={index}
                onMouseEnter={() => handleVideoHover(index)}
              >
                <TripData2
                  videoUrl={item.media_url}
                  isPlaying={activeVideoIndex === index}
                />
              </div>
            ))
        ) : (
          <h2>Loading.....</h2>
        )}
      </Carousel>
      <Link to="upComig_trips" smooth={true} offset={-70} duration={300}>
        <div className="upComing_trips">
          <button
            className="btn Upcoming btn-primary"
            style={{
              position: "fixed",
              top: "22rem",
              left: "90%",
              transform: "rotate(270deg)",
            }}
          >
            Upcoming Trips
          </button>
        </div>
      </Link>
    </div>
  );
}


export default InstaReels;
