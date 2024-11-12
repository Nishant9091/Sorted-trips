import React from "react";
import B1 from "../assets/Blog/B1.jpg";
import B2 from "../assets/Blog/B2.jpg";
import B3 from "../assets/Blog/B3.jpg";
import B4 from "../assets/Blog/B4.jpg";
import "./Blog.css"

const Blog = () => {
  const blog = {
    color: " #22577a!important",
    fontFamily: "nexaBold!important",
    position: "absolute",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    objectFit: "cover",
    color: "transparent",
    borderRadius: "6px",
  };
  const dPqboT = {
    fontFamily: "nexaBold",
    margin: "30px 10% auto",
    display: "grid ",
    gridTemplateColumns: "repeat(2, 1fr)",
    marginBottom: "5rem"
  };
  const zSEzB = {
    display: "flex",
    flexDirection: "column",
    WebkitBoxPack: "justify", // Note: Use WebkitBoxPack for vendor prefix
    justifyContent: "space-between",
  };
  const inGAtD = {
    textAlign: "start",
    display: "flex",
    marginRight: "20px",
    flexDirection: "column",
    height: "100%",
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
    gap: "20px",
  };
  const kvEJyU = {
    display: "flex",
    height: "33.33%",
    backgroundColor: "rgb(243 246 248)",
    borderRadius: "4px",
    padding: "10px",
  };
  const rQhQp = {
    position: "relative",
    width: "11vw",
    height: "100%",
    aspectRatio: "150 / 90",
    borderRadius: "6px",
    marginRight: "1.46vw",
  };
  const iWkXaT = {
    flex: "1 1 0%",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    height: "fit-content",
    marginTop: "3.5px",
  };
  const bPLaYT = {
    fontFamily: "nexaBold",
    textDecoration: "none",
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "19.2px",
    lineHeight: "27px",
    color: "rgba(12, 12, 12, 0.85)",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  };
  const fAkUOb = {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    color: "rgba(12, 12, 12, 0.85)",
    opacity: 0.72,
  };
  const eLcLNk = {
    display: "flex",
    flexDirection: "column",
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
  };
  const jeYVHk = {
    padding: "10px",
    borderRadius: "4px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(243 246 248)",
  };
  const eDLlSI = {
    position: "relative",
    aspectRatio: "464 / 216",
    marginBottom: "2.24vh",
    borderRadius: "6px",
  };
  const gXNwki = {
    display: "flex",
    WebkitBoxAlign: "center",
    alignItems: "center",
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
    marginTop: "44px",
  };
  const eiYMFJ = {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    color: "rgb(1, 95, 116)",
  };
  const kYrqwu = {
    display: "flex",
    webkitBoxPack: "start",
    justifyContent: "center"
  };
  const biaYPk = {
    marginTop: "80px",
    display: "flex",
    flexDirection: "column",
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
  };
  const gtABBK = {
    fontFamily: "nexaBold",
    fontSize: "39px",
    color: " #22577a",
    borderBottom: "4px solid  #22577a",
  };
  const dCqXha = {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "160%"
  };
  return (
    <div>
      <div class="sc-532c7acc-0 kYrqwu" style={kYrqwu}>
        <div class="sc-532c7acc-1 biaYPk" style={biaYPk}>
          <h2 class="sc-532c7acc-2 gtABBK" style={gtABBK}>
            Our Blogs
            <p class="sc-532c7acc-9 dCqXha" style={dCqXha}>
              Some good reads to help you travel better!
            </p>
          </h2>
          <div class="sc-532c7acc-6 bZOtZV">
            <div class="sc-532c7acc-4 eYDASI"></div>
          </div>
        </div>
      </div>

      <div className="sc-2912f786-0 dPqboT" style={dPqboT}>
        <div className="sc-2912f786-1 zSEzB" style={zSEzB}>
          <div className="sc-2912f786-2 inGAtD" style={inGAtD}>
            <div className="sc-2912f786-3 kvEJyU" style={kvEJyU}>
              <div className="sc-2912f786-12 rQhQp" style={rQhQp}>
                <img
                  alt="hotels-in-shillong"
                  sizes="100vw"
                  src={B1}
                  decoding="async"
                  data-nimg="fill"
                  loading="lazy"
                  style={blog}
                />
              </div>
              <div className="sc-2912f786-6 iWkXaT" style={iWkXaT}>
                <a
                  className="sc-2912f786-4 bPLaYT"
                  href="/blogs/hotels-in-shillong"
                  style={bPLaYT}
                >
                  Top 10 Hotels in Shillong for Couples, Family and Luxury
                  Tourist
                </a>
                <span className="sc-2912f786-5 fAkUOb" style={fAkUOb}>
                  August 14, 2023
                </span>
              </div>
            </div>

            <div className="sc-2912f786-3 kvEJyU" style={kvEJyU}>
              <div className="sc-2912f786-12 rQhQp" style={rQhQp}>
                <img
                  alt="ghepan-lake-in-spiti-valley"
                  sizes="100vw"
                  src={B2}
                 decoding="async"
                  data-nimg="fill"
                  loading="lazy"
                  style={blog}
                />
              </div>
              <div className="sc-2912f786-6 iWkXaT" style={iWkXaT}>
                <a
                  className="sc-2912f786-4 bPLaYT"
                  href="/blogs/gheapan-lake-trek-guide"
                  style={bPLaYT}
                >
                  Adventurous Gheapan Lake Trek Guide 2023
                </a>
                <span className="sc-2912f786-5 fAkUOb" style={fAkUOb}>
                  August 14, 2023 
                </span>
              </div>
            </div>
            <div className="sc-2912f786-3 kvEJyU" style={kvEJyU}>
              <div className="sc-2912f786-12 rQhQp" style={rQhQp}>
                <img
                  alt="sapa-in-vietnam"
                  sizes="100vw"
                  src={B3}
                  decoding="async"
                  data-nimg="fill"
                  loading="lazy"
                  style={blog}
                />
              </div>
              <div className="sc-2912f786-6 iWkXaT" style={iWkXaT}>
                <a
                  className="sc-2912f786-4 bPLaYT"
                  style={bPLaYT}
                  href="/blogs/things-to-do-in-sapa"
                >
                  Things To Do In Sapa, Vietnam: A Guide To Symphony of
                  Experiences and Must-Do Adventures
                </a>
                <span className="sc-2912f786-5 fAkUOb" style={fAkUOb}>
                  August 14, 2023 
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="sc-2912f786-8 eLcLNk" style={eLcLNk}>
          <div className="sc-2912f786-14 jeYVHk" style={jeYVHk}>
            <div className="sc-2912f786-10 eDLlSI" style={eDLlSI}>
              <img
                alt="treks-in-bali"
                sizes="100vw"
                src={B4}
                decoding="async"
                data-nimg="fill"
                loading="lazy"
                style={blog}
              />
            </div>
            <a
              className="sc-2912f786-9 vnFOE"
              href="/blogs/treks-in-bali"
              style={bPLaYT}
            >
              9 Treks In Bali : Escape To The Nature’s Wonderland
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
