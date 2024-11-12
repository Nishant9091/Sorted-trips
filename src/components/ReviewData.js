import "./Reviews1.css";

function ReviewData({ heading, text, videoUrl, star }) {
  return (
    <div className="tripdata">
      <div className="video-container">
        <iframe
        style={{width: '-webkit-fill-available',}}
      
          height="200"
          src={videoUrl}
          title="YouTube Video"
          allowFullScreen
        ></iframe>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <h4>{heading}</h4>
          <span style={{ fontSize: "22px", color: "gold" }}>{star}</span>
        </div>

        <p>{text}</p>
      </div>
    </div>
  );
}

export default ReviewData;
