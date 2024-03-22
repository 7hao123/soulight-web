import "./GuideList.css";
import { Rate, Flex, Button } from "antd";
import RateList from "./RateList";
import SaleBlock from "./SaleBlock";
import { MessageOutlined } from "@ant-design/icons";
import img1 from '../assets/dog.webp'
export default function GuideList({ message }: any) {
  const style1 = {
    borderColor: "purple",
    marginLeft: "12px",
    color: "purple",
    padding:'0 2em',
    borderRadius:'4px'
  };

  const style2 = {
    background: "purple",
    marginLeft: "12px",
    color: "white",
    padding:'0 2.2em',
    borderRadius:'4px'
  };
  return (
    <div className="box">
        <Flex>
        <img height={'140px'} src={img1} alt="" />
      <div className="introduce">
       
        <h2>{message.name}</h2>
        <p>{message.character}</p>
        <p>{message.information}</p>
      </div>
        </Flex>

      <Flex gap="small" vertical align="start" className="rate">
        <Flex vertical align="start">
          <Flex gap="small">
            <span style={{ fontWeight: "700", color: "purple" }}>
              {message.score}
            </span>
            <Rate disabled defaultValue={message.score} />
          </Flex>
          <span style={{ color: "#999" }}>{message.reviews} Reviews</span>
        </Flex>
        <RateList num={message.readings} content={"READINGS"} />
        <RateList num={message.readings} content={"SERVICES"} />
      </Flex>

      <div className="order">
        
          <Flex gap='middle'>
            <Button size="middle" style={style2}>Get Reading</Button>
            <div>
              <span>{message.readingPrice}/reading</span>
              <Flex style={{fontSize:'11px'}} gap='small'>
                <span className="under">{message.oldReadingPrice}</span>
                <SaleBlock />
              </Flex>
            </div>
          </Flex>
          <Flex gap='middle'>
            <Button size="middle" style={style1} icon={<MessageOutlined />}>Chat now</Button>
            <div>
            <span>{message.minPrice}/min</span>
            <Flex style={{fontSize:'11px'}} gap='small'>
              <span className="under">{message.oldReadingPrice}</span>
              <SaleBlock />
            </Flex>
            </div>
         
          </Flex>
         
        
      </div>
    </div>
  );
}
