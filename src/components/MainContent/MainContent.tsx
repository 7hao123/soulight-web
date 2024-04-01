import soulightPsyBg from "../../assets/soulightPsyBg@3x.png";
import Advisors from "../Advisors/Advisors";
import { Breadcrumb } from "antd";
import "./MainContent.css";

export default function MainContent() {
  return (
    <>
      <img width={"100%"} src={soulightPsyBg} alt="" />
      <div className="main">
        <Breadcrumb separator=">" style={{ margin: "16px 0 40px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>All Advisors</Breadcrumb.Item>
        </Breadcrumb>
        <Advisors />
      </div>
    </>
  );
}
