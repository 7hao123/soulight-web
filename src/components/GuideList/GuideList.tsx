import "./GuideList.css";
import { useState,useEffect } from "react";
import { Rate, Flex, Button } from "antd";
import RateList from "../RateList/RateList";
import SaleBlock from "../SaleBlock/SaleBlock";
import { MessageOutlined } from "@ant-design/icons";
import img1 from "../../assets/woman.webp";
import { Link } from "react-router-dom";
import heart from "../../assets/heart.png";
import redHeart from "../../assets/redHeart.png";
interface Message {
  image?:string,
  id?:string,
  name?:string,
  character?:string,
  information?:string,
  score:number,
  reviews?:string,
  readings:string,
  services?:string,
  readingPrice?: string,  
  oldReadingPrice?: string,  
  minPrice?: string,  
  oldMinPrice?: string,  
  onTime?: string,
accurate?: string,
}
interface Props{
  message:Message
}
export default function GuideList({ message }: Props) {
  const [isLoving, setIsLoving] = useState(false);
  useEffect(() => {
    const b = localStorage.getItem(message.name!)?localStorage.getItem(message.name!):false;
    const bb = b === "true";
    console.log(bb);
    setIsLoving(bb);
  }, []);
  const style1 = {
    borderColor: "#3c2488",
    marginLeft: "12px",
    color: "#3c2488",
    padding: "0 2em",
    borderRadius: "4px",
    width: "160px",
    height: "45px",
    fontSize: "16px",
    fontWeight: "bold",
  };

  const style2 = {
    background:
      "linear-gradient(to right, rgb(125, 60, 143), rgb(100, 83, 183))",
    marginLeft: "12px",
    color: "white",
    padding: "0 2.2em",
    borderRadius: "4px",

    width: "160px",
    height: "45px",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <div className="box">
      <Flex>
        <img height={"160px"} src={img1} alt="" />
        <div className="introduce">
          
            
            <Link to={`Advisor/${message.id}`}>
              <h2>{message.name}</h2>
              </Link> 
          
          <p>{message.character}</p>
          <p>{message.information}</p>
          <label className="loving">
                  <input
                    type="checkbox"
                    readOnly
                    checked={isLoving}
                  />
                  {isLoving ? (
                    <img height={"45px"} src={redHeart} />
                  ) : (
                    <img height={"45px"} src={heart} />
                  )}
               
                </label>
        </div>
      </Flex>

      <Flex gap="small" vertical align="start" className="rate">
        <Flex vertical align="start">
          <Flex gap="small">
            <span
              style={{ fontWeight: "700", color: "#76429a", fontSize: "16px" }}
            >
              {message.score}
            </span>
            <Rate disabled defaultValue={(message.score)} />
          </Flex>
          <span style={{ color: "#999" }}>{message.reviews} Reviews</span>
        </Flex>
        <RateList num={message.readings} content={"READINGS"} />
        <RateList num={message.readings} content={"SERVICES"} />
      </Flex>

      <Flex vertical gap="small" justify="center">
        <Flex gap="middle">
          <Button size="middle" style={style2}>
            Get Reading
          </Button>
          <div>
            <span style={{ color: "#3d2588", fontSize: "15px" }}>
              {message.readingPrice}
              <span style={{ color: "#3c2488", fontSize: "13px" }}>
                /reading
              </span>
            </span>
            <Flex style={{ fontSize: "11px", fontWeight: "bold" }} gap="small">
              <span className="under">{message.oldReadingPrice}</span>
              <SaleBlock />
            </Flex>
          </div>
        </Flex>
        <Flex gap="middle">
          <Button size="middle" style={style1} icon={<MessageOutlined />}>
            Chat now
          </Button>
          <div>
            <span style={{ color: "#3d2588", fontSize: "15px" }}>
              {message.minPrice}
              <span style={{ color: "#3c2488", fontSize: "13px" }}>/min</span>
            </span>
            <Flex style={{ fontSize: "11px", fontWeight: "bold" }} gap="small">
              <span className="under">{message.oldReadingPrice}</span>
              <SaleBlock />
            </Flex>
          </div>
        </Flex>
      </Flex>
    </div>
  );
}
