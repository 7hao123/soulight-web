import arrow from "../../assets/xiala.svg";
import paste from "../../assets/paste.svg";
import addPicture from "../../assets/addPicture.svg";
import xnew from "../../assets/xnew.webp";
import { Flex, Rate, Breadcrumb } from "antd";
import { useParams } from "react-router-dom";

import "./OrderDetail.css";
import { CSSProperties, useState } from "react";
import { useSelector } from "react-redux";
import store from "../../store";
export default function OrderDetail() {
  const params = useParams();
  const {messageName} = params
  console.log(params);
  const style1:CSSProperties = {display:'none'}
  const style2:CSSProperties ={display:'block'}
  const [xiala1,setxiala1] = useState(true)
  const [xiala2,setxiala2] =useState(true)
  const message = {
    name: "Sans",
    info: "ewew",
    order: "Expired",
    condition: "Text Reading",
    time: "Jun 28,2023 2:19 PM",
    introduce: "hello thank you thank you very much",
    score: 3,
  };

  const {orders} = useSelector((store)=>store.order)
  console.log(orders);
  
  const order1 = orders.filter(item =>{
    return item.name == messageName
  })
  const order =order1[0]
  console.log(order1);
  
  const handlexiala1= ()=>{
    setxiala1(!xiala1)
  }
  const handlexiala2= ()=>{
    setxiala2(!xiala2)
  }
  // const order = {
  //   name: "977673894111111",
  //   birth: "02-27-2005",
  //   gender: "Not Specific",
  //   generalSituation: "123456",
  //   specificQuestion: "ewew",
  // };
  return (
    <>
      <div
        style={{ width: "80%", display: "flex", justifyContent: "flex-start" }}
      >
        <Breadcrumb
          separator=">"
          style={{ margin: "32px 0 20px 0" }}
          items={[
            { title: <a href="/">Home</a> },
            { title: <a href="/MyOrder">MyOrder</a> },
            { title: "Order" },
          ]}
        ></Breadcrumb>
      </div>

      <div className="order-detail">
        <div className="order-detail-left">
          <div className="order-message">
            <div className="flex-between">
              <div className="order-title">
                <span>{message.order}</span>
                <span> | </span>
                <span style={{ marginLeft: "8px" }}>{message.condition}</span>
              </div>

              <div>
                <img
                  src={arrow}
                  height={"20px"}
                  style={{ marginRight: "5px",cursor:'pointer' }}
                  alt=""
                  onClick={handlexiala1}
                />
              </div>
            </div>
            <div className="xiala1" style={xiala1?style2:style1}>
              <div className="flex-between time-color">
                <span>Order Time</span>
                <span>End Time</span>
              </div>
              <div className="flex-between message-color">
                <span>{message.time}</span>
                <span>{message.time}</span>
              </div>
              <div className="dashed"></div>
              <div className="flex-between message-color">
                <span> Order ID:a313d541*********33198040</span>
                <div>
                  <img src={paste} alt="" height={"14px"} />
                </div>
              </div>
            </div>
          </div>
          <div className="request-detail">
            <div className="flex-between">
              <h2>Request Details</h2>
              <div>
                <img
                  src={arrow}
                  height={"20px"}
                  style={{ marginRight: "5px",cursor:'pointer' }}
                  alt=""
                  onClick={handlexiala2}
                />
              </div>
            </div>
            <div className="xiala2" style={xiala2?style2:style1}>
              <div className="flex-between request-color">
                <span>Name</span>
                <span>{order.name}</span>
              </div>
              <div className="flex-between request-color">
                <span>Date of Birth</span>
                <span>{order.birth}</span>
              </div>
              <div className="flex-between request-color">
                <span>Gender</span>
                <span>{order.gender}</span>
              </div>
            </div>
          </div>
          <div className="situation">
            <h2>General Situation</h2>
            <p>{order.situation}</p>
          </div>
          <div className="situation">
            <h2>Specific Question</h2>
            <p>{order.question}</p>
          </div>
          <img src={order.img} className="pic" alt="" />
        </div>
        <div className="order-detail-right">
          <Flex align="center">
            <img className="circle-img" src={xnew} alt="" />
            <Flex vertical className="order-info2">
              <h2>{message.name}</h2>
              <span className="new-introduce">{message.introduce}</span>
              <Flex gap="small">
                <Rate
                  style={{ height: "20px" }}
                  disabled
                  defaultValue={message.score}
                />
                <span style={{ fontWeight: "bold", color: "#6452b7" }}>
                  {message.score.toFixed(1)}
                </span>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap="middle" style={{ margin: "16px 0 32px 16px" }}>
            <Flex vertical gap="4px" align="center">
              <span className="rate-color">1128</span>
              <span className="rate-content-color">READINGS</span>
            </Flex>
            <Flex vertical gap="4px" align="center">
              <span className="rate-color">92.8hr</span>
              <span className="rate-content-color">PESPONSE IN</span>
            </Flex>
            <Flex vertical gap="4px" align="center">
              <span className="rate-color">99%</span>
              <span className="rate-content-color">ACCURATE</span>
            </Flex>
            <Flex vertical gap="4px" align="center">
              <span className="rate-color">92%</span>
              <span className="rate-content-color">ON-TIME</span>
            </Flex>
          </Flex>

          <div className="triangle2">
            <div>
              <span>Text Reading</span>
              <p>Delivered within 24h</p>
            </div>
            <div>
              <button className="dollar2">$ 4.99</button>
            </div>
          </div>
          <div className="triangle2">
            <div>
              <span>Text Reading</span>
              <p>Delivered within 24h</p>
            </div>
            <div>
              <button className="dollar2">$ 4.99</button>
            </div>
          </div>
          <div className="triangle2">
            <div>
              <span>Text Reading</span>
              <p>Delivered within 24h</p>
            </div>
            <div>
              <button className="dollar2">$ 4.99</button>
            </div>
          </div>
          <div className="triangle2">
            <div>
              <span style={{ lineHeight: "43px" }}>Live Text Chat</span>
            </div>
            <div>
              <button className="dollar2-grey2">$0.99/min</button>
            </div>
          </div>
          <div className="triangle2">
            <div>
              <span style={{ lineHeight: "43px" }}>Live Text Chat</span>
            </div>
            <div>
              <button className="dollar2-grey2">$0.99/min</button>
            </div>
          </div>
          <div className="triangle2">
            <div>
              <span style={{ lineHeight: "43px" }}>Live Text Chat</span>
            </div>
            <div>
              <button className="dollar2-grey2">$0.99/min</button>
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
    </>
  );
}
