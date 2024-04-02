import "./OrderItem.css";
import { Flex } from "antd";
import xnew from "../../assets/xnew.webp";
import { Link } from "react-router-dom";
interface message {
  name: string;
  birth: string;
  gender: string;
  situation: string;
  time: string;
  question: string;
}
interface order {
  message: message;
}
export default function OrderItem({ message }: order) {
  const style1 = {
    color: "#5a618a",
  };
  const style2 = {
    color: "#0094f8",
  };

  return (
    <>
  
     <div className="order-item" >
     <Flex align="center">
       <div className="o1"></div>
       <img className="circle-img" src={xnew} alt="" />
       <Flex vertical className="order-info">
       <Link to={`/OrderDetail/${message.name}`} >    <h2>{message.name}</h2> </Link>
      
         <span>{message.gender}</span>
         <div className="order-condition">
           <span style={message.situation == "Cancelled" ? style1 : style2}>
             {message.situation}
           </span>
           <span> | </span>
           <span style={{ marginLeft: "8px" }}>{message.question}</span>
         </div>
       </Flex>
     </Flex>

     <div className="time">{message.time}</div>
   </div>
  
     
    </>
  );
}
