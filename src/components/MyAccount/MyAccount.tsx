import { Form, Input, DatePicker, Flex, Breadcrumb } from "antd";
import "./MyAccount.css";
import female from '../../assets/female.svg'
import femaleActive from '../../assets/female-active.svg' 
import other from '../../assets/no.svg'
import otherActive from '../../assets/no-active.svg'
import { useState } from "react";
import MySelect from "../MySelect/MySelect";
export default function MyAccount() {
  const [gender,setGender] = useState('')
  function onNameChange(e){
    console.log(e.target.value);
    
  }
  function onRadioChange(e){
      setGender(e.target.value)
  }
  
  const activeStyle = {color:'#3d2488',fontWeight:'bold'}
  const normalStyle = {color:'#575758',fontWeight:'bold'}
  return (
    <>
    {/* 这里导致的横向滚动条？ */}
          <Flex align="start" style={{ width: "80%" }}>
        <Breadcrumb separator=">" style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>All Advisors</Breadcrumb.Item>
        </Breadcrumb>
       
      </Flex>
      <div className="tabs">
        <div className="tab-item1">User Information</div>
        <div className="tab-item2">Payment Information</div>
      </div>
      <div className="form">
        <Form
          layout="horizontal"
          size="large"
          style={{ width: 700,borderRadius:'6px' ,}}
          labelCol={{ span: 8 }}
          labelAlign="left"
        >
          <Form.Item
            label={<label className="labelcss">Name*</label>}
            colon={false}
          >
            <Input className="form-item" placeholder='Enter your name'
            onChange={onNameChange} />
          </Form.Item>
          <Form.Item
            label={<label className="labelcss">Date of Birth*</label>}
            colon={false}
          >
            <DatePicker className="form-item" placeholder="Enter your date of birth"/>
          </Form.Item>
          <Form.Item
            label={<label className="labelcss">Gender*</label>}
            colon={false}
          > 
            <Flex gap='40px' className="radio-box">
            <div>
            <input type="radio" name='gender' 
            onChange={onRadioChange}
            className="gender-radio1" value='female' id='female'/>
            <Flex vertical align="center" className="radio-color">
            <img src={gender=='female'?femaleActive:female} height={'32px'} alt="" />
            <label htmlFor='female' style={gender == 'female'? activeStyle:normalStyle}>female</label>
            </Flex>
           
            </div>
            <div>
            <input type="radio" name="gender" className="gender-radio2" value='other' id="other" 
            onChange={onRadioChange}
            />
            <Flex vertical align="center">
            <img src={gender=='other'?otherActive:other} height={'32px'}/>
            <label htmlFor="other" style={gender == 'other'? activeStyle:normalStyle}>other</label>
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
            />
          </Form.Item>
          <Form.Item
            label={<label className="labelcss">Phone Number</label>}
            colon={false}
          >
            <Flex gap="small" style={{ width: "500px" }}>
            <MySelect/>
              <Input  placeholder="Enter your phone number"/>
            </Flex>
          </Form.Item>
            <Form.Item style={{marginLeft:'233px'}}>
                
                <button className="submit">Save Changes</button>
                
                
            </Form.Item>
          
        </Form>
      </div>
    </>
  );
}
