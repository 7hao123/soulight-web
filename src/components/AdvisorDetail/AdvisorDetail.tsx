import { Breadcrumb, Flex, Rate } from "antd";
import dog from "../../assets/woman.webp";
import RateList2 from "../RateList2/RateList2";
import SaleBlock from "../SaleBlock/SaleBlock";
import "./AdvisorDetail.css";
import MyPagination from "../MyPagination/MyPagination";
import huangzuan from "../../assets/huangzuan.svg";

export default function AdvisorDetail() {
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
  return (
    <>
      <Flex align="start" style={{ width: "80%" }}>
        <Breadcrumb separator=">" style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>All Advisors</Breadcrumb.Item>
        </Breadcrumb>
      </Flex>

      <div className="container">
        <div className="leftblock">
          <Flex align="start" style={{ width: "100%" }} gap="small">
            <img src={dog} height={"140px"} alt="" />
            <div>
              <div className="info">
                <h2>{message.name}</h2>
                <p>{message.character}</p>
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
        <MyPagination />
      </div>
    </>
  );
}
