import React, { ReactNode, useState } from "react";
import {  Layout } from "antd";
const { Header, Content, Footer } = Layout;
import soulightNav from "./assets/soulightNav@3x.png";
import MainContent from "./components/MainContent/MainContent";
import ins from "./assets/icons8-instagram-48 2@3x.png";
import twiter from "./assets/home_t.png";
import tikok from "./assets/home_tictik.svg";
import facebook from "./assets/home_fb.png";
import Buttons from "./components/Buttons/Buttons";
import User from "./components/User/User";
import AdvisorDetail from './components/AdvisorDetail/AdvisorDetail'
import "./App.css";
import search from './assets/search-copy.svg'
import MyOrder from './components/MyOrder/MyOrder'

// const items = new Array(15).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));

import {
 
  Routes,
  Route
}from 'react-router-dom'
import MyAccount from "./components/MyAccount/MyAccount";
import TextReading from "./components/TextReading/TextReading";
import OrderDetail from "./components/OrderDetail/OrderDetail";


const items = [
 
  { key: "1", label: "About Us" },
  { key: "2", label: "Articles" },
  { key: "3", label: "Purchase" },
  { key: "4", label: "Contact Us" },
  { key: "5", label: "Premium Service" },
  { key: "6", label: "Affiliate Program" },
];
const item1 =
  { key: "0", label: "Our Psychics" }

const listItems: ReactNode[] = items.map((item) => {
  return <li key={item.key}><a href="">{item.label}</a></li>;
});
// 信息里面带有😈怎么处理





const App: React.FC = () => {
  const [login,setLogin] = useState(false);
  return (
    <Layout className="App">
      <Header className="Header">
        <img height={"100%"} src={soulightNav} alt="" />
        <ul className="menu">
          <li ><a href="" style={{color:'rgb(125, 60, 142)'}}>{item1.label}</a></li>
          {listItems}</ul>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <img src={search}
            style={{ margin: "8px 24px 0 12px", height:'24px', color: "rgb(67, 42, 140)" }}
          />
          {
            login ?   <User/> : <Buttons setLogin={setLogin} login={login}/>
          }
  
        </div>
      </Header>

      <Content className="Content">
          <Routes>
            <Route path='/' element={<MainContent/>}/>
            <Route path="/MyAccount" element={<MyAccount/>}/>
            <Route path="/Advisor/:messageName" element={<AdvisorDetail/>}/>
            <Route path="/TextReading" element={<TextReading/>}/>
            <Route path="/MyOrder" element={<MyOrder/>}/>
            <Route path="/OrderDetail/:messageName" element={<OrderDetail/>}/>
          </Routes>
          {/* <MainContent/> */}
          {/* <RouterProvider router={router}/> */}
          {/* <Outlet/> */}
      </Content>
      <Footer className="Footer">
        <div className="footer">
          <div className="left">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div className="item">
                <p>Explore Soulight</p>
                <a href="">All Advisors</a>
                <a href="">Premium Service</a>
                <a href="">Articles</a>
                <a href="">Student Discount</a>
                <a href="">About Us</a>
              </div>
              <div className="item">
                <p>Reading Topics</p>

                <a href="">Love & Relationship</a>
                <a href="">Marriage</a>
                <a href="">life Path</a>
                <a href="">Money & Finance</a>
                <a href="">Carrer Advice</a>
                <a href="">Lost People & Pets</a>
              </div>
              <div className="item">
                <p>Reading Tools</p>

                <a href="">Rarot Reading</a>
                <a href="">Psychic Readings</a>
                <a href="">Clairvoyant</a>
                <a href="">Astrology&Horoscope</a>
                <a href="">Angel Insight</a>
                <a href="">Angel Insight</a>
                <a href="">Oracle Guidance</a>
                <a href="">Dream Analysis</a>
              </div>
              <div className="item">
                <p>Support</p>

                <a href="">FAQ</a>
                <a href="">Terms of Use</a>
                <a href="">Privacy Policy</a>
                <a href="">Contact Us</a>
                <a href="">Apply for Advisor</a>
              </div>
              <div className="item">
                <p>Affiliate Program</p>
                <p style={{ width: "118px",fontWeight:'550' }}>
                  Influencer?Online Marketer? Let's make every connection
                  valuable.Earn up to $100 from new paying user by promoting us.
                </p>
                <a href="" style={{marginTop:'4px'}}>More details&gt;&gt; </a>
              </div>
            </div>
            <div className='logo'>
              <span>2023 Best Psychic,inc © All rights reserved</span>
            </div>
          </div>
          <div className="right">
            <p>Get Soulight Mobile App</p>
            
              <img src={ins} height={'80px'} alt="" />
            

            <span>Follow us</span>
            <div className="media">
              <img src={ins} alt="" />
              <img src={twiter} alt="" />
              <img src={tikok} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default App;
