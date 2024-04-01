import "./OrderItem.css";
import { Flex } from "antd";
import xnew from "../../assets/xnew.webp";
interface message{
  name:string,
  info:string,
  order:string,
  condition:string,
  time:string,
  isOnline:boolean
}
interface order{
  message:message
}
export default function OrderItem({message}:order) {
const style1 = {
  color:'#5a618a'
}
const style2 ={
  color:'#0094f8'
}
  return (
    <>
      <div className="order-item">
        <Flex align="center">
        <div className="o1" >

</div>
          <img className="circle-img" src={xnew} alt="" />
          <Flex vertical className="order-info">
            <h2>{message.name}</h2>
            <span>{message.info}</span>
            <div className="order-condition">
              <span style={message.order == 'Cancelled'?style1:style2}>{message.order}</span>
              <span> | </span>
              <span style={{ marginLeft: "8px" }}>{message.condition}</span>
            </div>
          </Flex>
        </Flex>

        <div className="time">{message.time}</div>
      </div>
    </>
  );
}
