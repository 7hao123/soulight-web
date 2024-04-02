import { Breadcrumb, Flex, Rate } from "antd";
import dog from "../../assets/woman.webp";
import RateList2 from "../RateList2/RateList2";
import SaleBlock from "../SaleBlock/SaleBlock";
import "./AdvisorDetail.css";
import MyPagination from "../MyPagination2/Mypagination";
import huangzuan from "../../assets/huangzuan.svg";
import { useEffect, useState } from "react";
import heart from "../../assets/heart.png";
import redHeart from "../../assets/redHeart.png";
import { useParams, Link } from "react-router-dom";
export default function AdvisorDetail() {
  const params = useParams();
  console.log(params);

  const message = {
    image: "#",
    name: "Harmony Bliss Harmony",
    character: "LOVE SPECIALIST ENERGY READER ADVISOR",
    information:
      "Harmony Bliss is a holistic healer and tarot reader who specializes in providing clients with a balanced and integrated approach to healing. " +
      "She uses her intuitive abilities and tarot cards to guide clients towards self-discovery and inner peace. " +
      "Harmony's sessions are deeply personal and transformative, helping clients overcome challenges and achieve harmony in all aspects of their lives.",
    score: 5.0,
    reviews: "1987",
    readings: "9451",
    oldReadingPrice: "$25.49",
    services: "4",
    onTime: "99%",
    accurate: "98%",
  };
  const comment = {
    name: "Anonymous",
    content: "On point very factual and clear",
    time: "Jul 17,2023 4:22:9",
    score: "5.0",
  };
  const [isLoving, setIsLoving] = useState(false);
  function handleLoving() {
    setIsLoving(!isLoving);
    localStorage.setItem(message.name, String(!isLoving));
  }
  useEffect(() => {
    const b = localStorage.getItem(message.name);
    const bb = b === "true";
    console.log(bb);
    setIsLoving(bb);
  }, []);

  return (
    <>
      <div
        style={{ width: "80%", display: "flex", justifyContent: "flex-start" }}
      >
        <Breadcrumb
          separator=">"
          style={{ margin: "32px 0 16px 0" }}
          items={[{ title: <a href="/">Home</a> }, { title: message.name }]}
        ></Breadcrumb>
      </div>

      <div className="container">
        <div className="leftblock">
          <Flex align="start" style={{ width: "100%" }} gap="small">
            <img src={dog} height={"140px"} alt="" />
            <div>
              <div className="info">
                <h2>{message.name}</h2>
                <p>{message.character}</p>
                <label className="loving">
                  <input
                    type="checkbox"
                    onChange={handleLoving}
                    checked={isLoving}
                  />
                  {isLoving ? (
                    <img height={"45px"} src={redHeart} />
                  ) : (
                    <img height={"45px"} src={heart} />
                  )}
                  {/* <svg
                    height="24px"
                    id="Layer_1"
                    version="1.2"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g>
                      <g>
                        <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path>
                      </g>
                    </g>
                  </svg> */}
                </label>
              </div>
              <Flex className="mark" gap="large">
                <Flex vertical align="start" gap="12px">
                  <Flex gap="small" align="center">
                    <span
                      style={{
                        fontWeight: "700",
                        color: "#7d3c8e",
                        fontSize: "18px",
                      }}
                    >
                      {message.score.toFixed(1)}
                    </span>
                    <Rate disabled defaultValue={message.score} />
                  </Flex>
                  <span style={{ color: "#8e8e8e", fontWeight: "bold" }}>
                    {message.reviews} Reviews
                  </span>
                </Flex>
                <Flex className="models" gap="large">
                  <RateList2 num={message.readings} content={"READINGS"} />
                  <RateList2 num={message.onTime} content={"ON-TIME"} />
                  <RateList2 num={message.accurate} content={"ACCURATE"} />
                </Flex>
              </Flex>
            </div>
          </Flex>
          <div className="btns">
            <h2>Service Category</h2>
            <Flex align="start" gap="middle">
              <button>Love & RealtionShip</button>
              <button>Tarot Reading</button>
              <button>Psychic Readings</button>
              <button>Carrer Advice</button>
              <button>Dream Analysis</button>
            </Flex>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="review">
              <div className="comment">
                <span className="comment-name">{comment.name}</span>
                <Flex gap="small" align="center">
                  <span
                    style={{
                      fontWeight: "700",
                      color: "#74439b",
                      fontSize: "16px",
                    }}
                  >
                    {message.score.toFixed(1)}
                  </span>
                  <Rate disabled defaultValue={message.score} />
                </Flex>
              </div>
              <p>{comment.content}</p>
              <span className="comment-time">{comment.time}</span>
            </div>
            <div className="review">
              <div className="comment">
                <span className="comment-name">{comment.name}</span>
                <Flex gap="small" align="center">
                  <span
                    style={{
                      fontWeight: "700",
                      color: "#74439b",
                      fontSize: "16px",
                    }}
                  >
                    {message.score.toFixed(1)}
                  </span>
                  <Rate disabled defaultValue={message.score} />
                </Flex>
              </div>
              <p>{comment.content}</p>
              <span className="comment-time">{comment.time}</span>
            </div>
          </div>
        </div>
        <div className="rightblock">
          <Flex>
            <div className="reading">Reading</div>
            <Flex className="service" align="center" gap="2px">
              <img src={huangzuan} height={"14px"} alt="" /> Service
            </Flex>
          </Flex>
          <Link to="/TextReading">
          <div className="triangle">
            <div>
             
               
                <span style={{ color: "#3c2488", fontWeight: "bold" }}>
                  Text Reading
                </span>
         

              <p>Delivered within 24h</p>
            </div>
            <div>
              <button className="dollar">$17.84</button>
              <Flex style={{ fontSize: "11px", marginTop: "2px" }} gap="40px">
                <span className="under">{message.oldReadingPrice}</span>
                <SaleBlock />
              </Flex>
            </div>
          </div>
          </Link>
         
          <div className="triangle">
            <div>
              <span
                style={{
                  lineHeight: "43px",
                  color: "#3c2488",
                  fontWeight: "bold",
                }}
              >
                Live Text Chat
              </span>
            </div>
            <div>
              <button className="dollar-grey">
                <span style={{ color: "#d9dbde" }}>$</span>12.49/min
              </button>
              <Flex style={{ fontSize: "11px", marginTop: "2px" }} gap="40px">
                <span className="under">{message.oldReadingPrice}</span>
                <SaleBlock />
              </Flex>
            </div>
          </div>
          <Flex justify="center">
            <div className="note">
              <div>See what you will get:</div>
              <button>Service Preview</button>
            </div>
          </Flex>
        </div>
      </div>
      <div style={{ marginBottom: "60px" }}>
        <MyPagination total={60} />
      </div>
    </>
  );
}
