import {
  Form,
  Input,
  DatePicker,
  Flex,
  Breadcrumb,
  DatePickerProps,
} from "antd";
import dayjs from "dayjs";
import "./MyAccount.css";
import female from "../../assets/female.svg";
import femaleActive from "../../assets/female-active.svg";
import other from "../../assets/no.svg";
import otherActive from "../../assets/no-active.svg";
import { useEffect, useState } from "react";
import MySelect from "../MySelect/MySelect";
export default function MyAccount() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [birth, setBirth] = useState('');
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const handleItemSelect = (item) => {
    setSelectedItem(item);
    console.log(item);
  };
  function onNameChange(e:React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
    console.log(e.target.value);
  }
  function onRadioChange(e:React.ChangeEvent<HTMLInputElement>) {
    setGender(e.target.value);
  }
  const onBirthChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setBirth(dateString as string);
  };
  function onPhoneNumChange(e:React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setPhoneNum(e.target.value);
  }
  function onEmailChange(e:React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleSubmit() {
    localStorage.setItem("accountName", name);
    localStorage.setItem("accountGender", gender);
    localStorage.setItem("accountbirth", birth);
    localStorage.setItem("accountEmail", email);
    localStorage.setItem("accountPhone", phoneNum);
    localStorage.setItem("accountCountry", selectedItem);
  }
  useEffect(() => {
    setName(localStorage.getItem("accountName")!);
    setGender(localStorage.getItem("accountGender")!);
    setBirth(localStorage.getItem("accountbirth")!);
    setEmail(localStorage.getItem("accountEmail")!);
    setPhoneNum(localStorage.getItem("accountPhone")!);
    setCountry(localStorage.getItem("accountCountry")!);
  }, []);

  const activeStyle = { color: "#3d2488", fontWeight: "bold" };
  const normalStyle = { color: "#575758", fontWeight: "bold" };
  return (
    <>
      {/* 这里导致的横向滚动条？ */}
      <div
        style={{ width: "80%", display: "flex", justifyContent: "flex-start" }}
      >
        <Breadcrumb
          separator=">"
          style={{ margin: "32px 0 0 0" }}
          items={[
            { title: <a href="/">Home</a> },
         
            { title: "MyAccount" },
          ]}
        ></Breadcrumb>
      </div>
      <div className="tabs">
        <div className="tab-item1">User Information</div>
        <div className="tab-item2">Payment Information</div>
      </div>
      <div className="form">
        <Form
          layout="horizontal"
          size="large"
          style={{ width: 700, borderRadius: "6px" }}
          labelCol={{ span: 8 }}
          labelAlign="left"
        >
          <Form.Item
            label={<label className="labelcss">Name*</label>}
            colon={false}
          >
            <Input
              className="form-item"
              placeholder="Enter your name"
              onChange={onNameChange}
              value={name}
            />
          </Form.Item>
          <Form.Item
            label={<label className="labelcss">Date of Birth*</label>}
            colon={false}
          >
            <DatePicker
              className="form-item"
              placeholder="Enter your date of birth"
              onChange={onBirthChange}
              value={birth?dayjs(birth):null}
            />
          </Form.Item>
          <Form.Item
            label={<label className="labelcss">Gender*</label>}
            colon={false}
          >
            <Flex gap="40px" className="radio-box">
              <div>
                <input
                  type="radio"
                  name="gender"
                  onChange={onRadioChange}
                  className="gender-radio1"
                  value="female"
                  id="female"
                />
                <Flex vertical align="center" className="radio-color">
                  <img
                    src={gender == "female" ? femaleActive : female}
                    height={"32px"}
                    alt=""
                  />
                  <label
                    htmlFor="female"
                    style={gender == "female" ? activeStyle : normalStyle}
                  >
                    female
                  </label>
                </Flex>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  className="gender-radio2"
                  value="other"
                  id="other"
                  onChange={onRadioChange}
                />
                <Flex vertical align="center">
                  <img
                    src={gender == "other" ? otherActive : other}
                    height={"32px"}
                  />
                  <label
                    htmlFor="other"
                    style={gender == "other" ? activeStyle : normalStyle}
                  >
                    other
                  </label>
                </Flex>
              </div>
            </Flex>
          </Form.Item>
          <Form.Item
            label={<label className="labelcss">Email Address</label>}
            colon={false}
          >
            <Input
              className="form-item"
              placeholder="Enter your email address "
              onChange={onEmailChange}
              value={email}
            />
          </Form.Item>
          <Form.Item
            label={<label className="labelcss">Phone Number</label>}
            colon={false}
          >
            <Flex gap="small" style={{ width: "500px" }}>

              <MySelect handleSelected={handleItemSelect} country={country}/>

              <Input
                placeholder="Enter your phone number"
                onChange={onPhoneNumChange}
                value={phoneNum}
              />
            </Flex>
          </Form.Item>
          <Form.Item style={{ marginLeft: "233px" }}>
            <button className="submit" onClick={handleSubmit}>
              Save Changes
            </button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
