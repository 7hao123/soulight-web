import React, { ReactNode } from "react";
import { Breadcrumb, Layout } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
import soulightNav from "./assets/soulightNav@3x.png";
import soulightPsyBg from "./assets/soulightPsyBg@3x.png";
import ins from "./assets/icons8-instagram-48 2@3x.png";
import twiter from "./assets/home_t.png";
import tikok from "./assets/home_fb.png";
import facebook from "./assets/home_fb.png";
import GuideLIst from './components/GuideList'
import "./App.css";
import MyPagination from "./components/MyPagination/MyPagination";

// const items = new Array(15).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));

const items = [
  { key: "0", label: "Our Psychics" },
  { key: "1", label: "About Us" },
  { key: "2", label: "Articles" },
  { key: "3", label: "Purchase" },
  { key: "4", label: "Contact Us" },
  { key: "5", label: "Premium Service" },
  { key: "6", label: "Affiliate Program" },
];
const listItems: ReactNode[] = items.map((item) => {
  return <li key={item.key}><a href="">{item.label}</a></li>;
});
// 信息里面带有😈怎么处理
const message = {
  image: "#",
  name: "Saira Psychics Sara",
  character: "Life coach Spiritual healer love",
  information:
    "As a life coach, Sara is passionate about guiding her clients towards personal growth and inner transformation. " +
    "She believes that everyone has the ability to overcome obstacles and create a life they love," +
    "and she uses her expertise to help clients identify their strengths, overcome challenges, and achieve their goals.",
  score: "5.0",
  reviews: "3961",
  readings: "15119",
  services: "5",
  readingPrice: "$17.83",
  oldReadingPrice: "$25.49",
  minPrice: "$12.49",
  oldMinPrice: "$24.99",
};

const style1 = {
  borderColor: "purple",
  marginLeft: "12px",
  color: "purple",
};

const style2 = {
  background: "purple",
  marginLeft: "12px",
  color: "white",
};


const App: React.FC = () => {
  return (
    <Layout className="App">
      <Header className="Header">
        <img height={"100%"} src={soulightNav} alt="" />
        <ul className="menu">{listItems}</ul>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <SearchOutlined
            style={{ margin: "0 24px 0 12px", color: "purple" }}
          />
          <button style={style1}>Sign in</button>
          <button style={style2}>Regsister</button>
      
        </div>
      </Header>

      <Content className="Content">
        <img width={"100%"} src={soulightPsyBg} alt="" />

        <div className="main">
          <Breadcrumb separator=">" style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>All Advisors</Breadcrumb.Item>
          </Breadcrumb>
          <GuideLIst message={message}/>
          <hr />
          <GuideLIst message={message}/>
          <hr />
          <GuideLIst message={message}/>
          <MyPagination/>
        </div>
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
                <p style={{ width: "110px" }}>
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
            <div>
              <img src={ins} alt="" />
            </div>

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
