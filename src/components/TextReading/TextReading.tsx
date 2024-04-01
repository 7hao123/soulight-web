import "./TextReading.css";
import paste from "../../assets/paste.svg";
import { Form, Input, DatePicker, Select, Flex, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import addPicture from "../../assets/addPicture.svg";
import woman from "../../assets/woman.webp";
import reply from "../../assets/nltext.png";
import wallet from "../../assets/75.svg";
import Online from "../Online/Online";
import { useState, useRef, useEffect } from "react";
export default function TextReading() {
  const MAX_NAME = 20;
  const MAX_TEXTAREA = 3000;
  const MAX_QUESTION = 300;
  const message = {
    name: "Psychic Mel",
    character: "Love expert,97.4% accuracy",
    score: 4.9,
    price: "$9.99",
  };

  const fileInputRef = useRef(null);
  // const [imgSrc,setImageSrc] = useState('')
  
  const [base64Image, setBase64Image] = useState('');  
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // console.log(window.URL.createObjectURL(file));
    // const objectUrl = window.URL.createObjectURL(file); 
    if(file){
      const reader = new FileReader();
    reader.onload = e =>{
      setBase64Image(e.target.result)
      localStorage.setItem('image',e.target.result)
      
    }
    reader.readAsDataURL(file)
    
    }
  };
  useEffect(()=>{
    const storedImage = localStorage.getItem('image');  
    if (storedImage) {  
      setBase64Image(storedImage);  
    }  
  },[])

  function onfinish(values: any) {
    console.log(values);
  }

  const [form] = Form.useForm();

  return (
    <>
      <div className="text-reading-title">Order Request</div>

      <div className="text-reading-main">
        <div className="text-reading-left">
          <div className="paste">
            <span>
              <img className="paste-icon" src={paste} alt="" />
              <span className="font1">Paste from last submitted</span>
            </span>
            <span className="ewew">ewew</span>
          </div>
          <div>
            <Form
              form={form}
              onFinish={onfinish}
              layout="vertical"
              style={{ width: 500, borderRadius: "6px" }}
            >
              <Form.Item
                label={<label className="labelcss">Name*</label>}
                colon={false}
                name="note"
                style={{ position: "relative" }}
              >
                <Input
                  className="form-item"
                  placeholder="Enter your name"
                  maxLength={MAX_NAME}
                  showCount
                />
              </Form.Item>
              <Form.Item
                label={<label className="labelcss">Date of Birth*</label>}
                colon={false}
                name="birth"
              >
                <DatePicker
                  className="form-item"
                  placeholder="Enter your date of birth"
                />
              </Form.Item>
              <Form.Item
                label={<label className="labelcss">Gender*</label>}
                colon={false}
                name="gender"
              >
                <Select
                  className="form-item"
                  suffixIcon={">"}
                  defaultValue="Not Specific"
                  options={[
                    { value: "Female", label: "Female" },
                    { value: "Male", label: "Male" },
                    {
                      value: "Not Specific ",
                      label: "Not Specific",
                    },
                  ]}
                ></Select>
              </Form.Item>
              <Form.Item
                label={<label className="labelcss">General Situation*</label>}
                name="situation"
              >
                <TextArea
                  showCount
                  style={{ resize: "none", height: "200px" }}
                  maxLength={MAX_TEXTAREA}
                ></TextArea>
              </Form.Item>
              <Form.Item
                label={<label className="labelcss">Specific Questions* </label>}
                colon={false}
                name="question"
              >
                <Input
                  showCount
                  className="form-item"
                  placeholder="One question Only"
                  maxLength={MAX_QUESTION}
                />
              </Form.Item>
              <div>
                <img
                  src={base64Image?base64Image:addPicture}
                  width={'80x'}
                  alt="Click to upload"
                  onClick={handleImageClick}
                  style={{ cursor: "pointer" }}
                  
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  accept="image/*"
                />
                {/* <input type="file"  accept="image/*"   onChange={onchange}/>
                  <img  src={addPicture} alt="" />*/}
              </div>

              <Flex gap="14px" style={{ marginTop: "16px" }}>
                <div className="btn-box">
                  <button className="btn-grey">Submit</button>
                  <span style={{ color: "#a4a4a4", fontWeight: "bold" }}>
                    Delivered within 24h{" "}
                  </span>
                </div>
                <div className="btn-box">
                  <button className="btn-grey">Speed Up</button>
                  <span style={{ color: "#a4a4a4", fontWeight: "bold" }}>
                    Delivered within 1h{" "}
                  </span>
                </div>
              </Flex>
            </Form>
          </div>
        </div>

        <div className="text-reading-right">
          <div className="promo-code-box">
            <div className="span-promo">Promo/Student Code</div>
            <Flex gap="small">
              <Input
                style={{ width: "310px", height: "50px" }}
                placeholder="Enter your Promo/student code you got abasdfj"
              ></Input>
              <button className="btn-apply">Apply</button>
            </Flex>
          </div>
          <Flex vertical className="big-info">
            <Flex gap="middle" className="info-box">
              <div style={{ position: "relative" }}>
                <img src={woman} height={"80px"} alt="" />
                <Online
                  style={{ position: "absolute", left: "52px", top: "67px" }}
                />
              </div>

              <div>
                <div className="small-info">
                  <h2>{message.name}</h2>
                  <p>{message.character}</p>
                  <Flex gap="100px">
                    <Flex gap="small">
                      <span style={{ fontWeight: "bold", color: "#6452b7" }}>
                        {message.score}
                      </span>
                      <Rate disabled defaultValue={message.score} />
                    </Flex>
                    <span
                      style={{
                        color: "#72459f",
                        fontWeight: "bold",
                        fontSize: "16px",
                      }}
                    >
                      {message.price}/
                      <span
                        style={{
                          color: "#7046a2",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        reading
                      </span>
                    </span>
                  </Flex>
                </div>
              </div>
            </Flex>

            <div>
              <p className="drop-shadow">
                Hello,hope you are doing well and welcome to my profile.Please
                be comfortable and be relaxed and be ready for a comfortable
                reading to hear the truth today..Please make sure you provide
                names and date of birth that helps me look into it more deeper
                especially with intentions and time frames..so are you ready
              </p>
            </div>
          </Flex>

          <img width={"520px"} src={reply} alt="" />
          <div>
            <div
              style={{
                color: "#23173e",
                fontWeight: "bold",
                fontSize: "24px",
                marginBottom: "16px",
                marginTop: "32px",
              }}
            >
              Why Soulight is right for you?
            </div>
            <div style={{ marginBottom: "8px" }}>
              <Flex align="center" gap="8px">
                <img src={wallet} alt="" />
                <span
                  style={{
                    color: "#23173e",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Secure Payment
                </span>
              </Flex>

              <div className="soulight-info">
                - Financial Information Completely Protected
              </div>
              <div className="soulight-info">- Secured Transaction Process</div>
            </div>
            <div style={{ marginBottom: "8px" }}>
              <Flex align="center" gap="8px">
                <img src={wallet} alt="" />
                <span
                  style={{
                    color: "#23173e",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Secure Payment
                </span>
              </Flex>

              <div className="soulight-info">
                - Financial Information Completely Protected
              </div>
              <div className="soulight-info">- Secured Transaction Process</div>
            </div>
            <div style={{ marginBottom: "8px" }}>
              <Flex align="center" gap="8px">
                <img src={wallet} alt="" />
                <span
                  style={{
                    color: "#23173e",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Secure Payment
                </span>
              </Flex>

              <div className="soulight-info">
                - Financial Information Completely Protected
              </div>
              <div className="soulight-info">- Secured Transaction Process</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
