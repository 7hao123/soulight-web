import soulightPsyBg from "../../assets/soulightPsyBg@3x.png";
import Advisors from "../Advisors/Advisors";
import { Breadcrumb } from "antd";
import "./MainContent.css";

export default function MainContent() {
  return (
    <>
      <img width={"100%"} src={soulightPsyBg} alt="" />
      <div className="main">
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}
      >
        <Breadcrumb
          separator=">"
          style={{ margin: "32px 0 32px 0" }}
          items={[
            { title: <a href="/">Home</a> },
            { title: "All Advisors" },
          ]}
        ></Breadcrumb>
      </div>
        <Advisors />
      </div>
    </>
  );
}
