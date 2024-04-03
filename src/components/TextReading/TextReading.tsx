import "./TextReading.css";
import paste from "../../assets/paste.svg";
import { Form, Input, DatePicker, Select, Flex, Rate,DatePickerProps,Breadcrumb } from "antd";
import TextArea from "antd/es/input/TextArea";
import addPicture from "../../assets/addPicture.svg";
import woman from "../../assets/woman.webp";
import reply from "../../assets/nltext.png";
import wallet from "../../assets/75.svg";
import Online from "../Online/Online";
import { useState, useRef, useEffect } from "react";
import dayjs from "dayjs";
import rocket from '../../assets/rocket.svg'
import { useDispatch,useSelector } from "react-redux";
import { addOrder } from "../../store/features/orders";
export default function TextReading() {
  const MAX_NAME = 20;
  const MAX_TEXTAREA = 3000;
  const MAX_QUESTION = 300;
  const message = {
    name: "Psychic Mel",
    character: "Love expert,97.4% accuracy",
    score: 4.9,
    price: "$9.99",
    reviews:1987,
    id:'1'
  };
  
 
  const fileInputRef = useRef(null);
  // const [imgSrc,setImageSrc] = useState('')
  
  const [base64Image, setBase64Image] = useState('');  
  const [name,setName] = useState('')
  const [birth,setBirth] = useState(null)
  const [gender,setGender] = useState('')
  const [situation,setSituation] = useState('')
  const [question,setQuestion] =useState('')
  const handleImageClick = () => {
    // fileInputRef.current.click();
    if (fileInputRef.current) {  
      // 确保 fileInputRef.current 不为 null 或 undefined  
      fileInputRef.current.click();  
    } else {  
      // 处理 fileInputRef.current 为空的情况  
      console.error('fileInputRef 尚未被赋值');  
    } 
  };

  const handleFileChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // console.log(window.URL.createObjectURL(file));
    // const objectUrl = window.URL.createObjectURL(file); 
    if(file){
      const reader = new FileReader();
    reader.onload = e =>{
      setBase64Image(e.target?.result as string)
      localStorage.setItem('image',e.target?.result as string)
      
    }
    reader.readAsDataURL(file)
    
    }
  };

  function onNameChange(e:React.ChangeEvent<HTMLInputElement>){
      setName(e.target.value)
  }
  const onBirthChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setBirth(dateString);
  };
  function onGenderChange(value:string){
    console.log(value);
    setGender(value)
  }
  function onSituationChange(e:React.ChangeEvent<HTMLTextAreaElement>){
    console.log(e.target.value);
    
    setSituation(e.target.value)
  }
  function onQuestionChange(e:React.ChangeEvent<HTMLInputElement>){
    setQuestion(e.target.value)
  }
  const dispatch = useDispatch();
  const {orders} = useSelector((store)=>store.order)
  const {value} = useSelector((store)=>store.login)
  console.log(value);
  
  function onSubmit(){

    if(value){
      const form = {
        name,
        birth,
        gender,
        situation,
        question,  
        time:'2023-04-01',
        img:base64Image
      }
      
      dispatch(addOrder(form))
      console.log(orders);
      
      // localStorage.setItem('orders',JSON.stringify(orders))
  
      localStorage.setItem('orderName',name)
      localStorage.setItem('orderBirth',birth)
      localStorage.setItem('orderGender',gender)
      localStorage.setItem('orderSituation',situation)
      localStorage.setItem('orderQuestion',question) 
    }else{
      alert('请登录')
    
      
    }
   
  }

  useEffect(()=>{
    localStorage.setItem('orders', JSON.stringify(orders));  
  },[orders])

  // const [form] = Form.useForm();

  useEffect(()=>{
    const storedImage = localStorage.getItem('image');  
    if (storedImage) {  
      setBase64Image(storedImage);  
    }  
 

    // setName(localStorage.getItem("orderName")! );
    // setGender(localStorage.getItem("orderGender")!);
    // setBirth(localStorage.getItem("orderBirth")!);
    // setSituation(localStorage.getItem('orderSituation')!)
    // setQuestion(localStorage.getItem('orderQuestion')!)
    // form.setFieldsValue({note:name,gender:gender,birth:dayjs(birth),situation:situation,question:question})
    // form.setFields({note:name,gender:gender,birth:birth,situation:situation,question:question})
     
  },[])


  

  return (
    <>
        <div
        style={{ width: "80%", display: "flex", justifyContent: "flex-start" }}
      >
        <Breadcrumb
          separator=">"
          style={{ margin: "32px 0 32px 0" }}
          items={[
            { title: <a href="/">Home</a> },
            {title:<a href={`/Advisor/${message.id}`}>{message.name}</a>},
            { title: "Text Reading" },
          ]}
        ></Breadcrumb>
      </div>
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
             
              layout="vertical"
              style={{ width: 500, borderRadius: "6px" }}
            >
              <Form.Item
                label={<label className="labelcss">Name*</label>}
                colon={false}
                
                style={{ position: "relative" }}
              >
                <Input
                  className="form-item"
                  placeholder="Enter your name"
                  maxLength={MAX_NAME}
                  showCount
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
                <Select
                  className="form-item"
                  suffixIcon={">"}
                  
                  options={[
                    { value: "Female", label: "Female" },
                    { value: "Male", label: "Male" },
                    {
                      value: "Not Specific ",
                      label: "Not Specific",
                    },
                  ]}
                  onChange={onGenderChange}
                  value={gender}
                ></Select>
              </Form.Item>
              <Form.Item
                label={<label className="labelcss">General Situation*</label>}
                
              >
                <TextArea
                  showCount
                  style={{ resize: "none", height: "200px" }}
                  maxLength={MAX_TEXTAREA}
                  onChange={onSituationChange}
                  value={situation}
                ></TextArea>
              </Form.Item>
              <Form.Item
                label={<label className="labelcss">Specific Questions* </label>}
                colon={false}
                
              >
                <Input
                  showCount
                  className="form-item"
                  placeholder="One question Only"
                  maxLength={MAX_QUESTION}
                  onChange={onQuestionChange}
                  value={question}
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
                  <button className="btn-grey" onClick={()=>onSubmit()}>Submit</button>
                  <span style={{ color: "#a4a4a4", fontWeight: "bold" }}>
                    Delivered within 24h{" "}
                  </span>
                </div>
                <div className="btn-box">
                  <button className="btn-grey" onClick={onSubmit}><img src={rocket} height={'20px'} alt="" />Speed Up</button>
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
