import "./OrderItem.css";
import { Flex } from "antd";
import xnew from "../../assets/xnew.webp";
export default function OrderItem() {
  const message = {
    name: "Sans",
    info: "ewew",
    order: "Expired",
    condition: "Text Reading",
    time: "Jun 28,2023 2:19 PM",
  };
  return (
    <>
      <div className="order-item">
        <Flex align="center">
          <img className="circle-img" src={xnew} alt="" />
          <Flex vertical className="order-info">
            <h2>{message.name}</h2>
            <span>{message.info}</span>
            <div className="order-condition">
              <span>{message.order}</span>
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
