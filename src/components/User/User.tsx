import "./User.css";
import { Flex, Popover } from "antd";
import female from "../../assets/female_1.png";
import logo75 from '../../assets/75.svg'
import {Link} from 'react-router-dom'
export default function User() {
  const name = localStorage.getItem('accountName')
  const content = (
    <Flex vertical>
      <Link to='/MyAccount'>My Account</Link>

      <Link to='/MyOrder'>My Order</Link>
      <a>Sign Out</a>
    </Flex>
  );
  
  return (
    <>
      <Popover placement="bottom" content={content}>
        <Flex align="center" gap="small" className="user">
          <img src={female} height={"45px"} alt="" />
          <Flex vertical>
            <p className="name">Hi,{name ? name : "977673894111111"}</p>
            <Flex>
              <div className="radius-no-color"></div>
              <div className="account">$1234.67</div>
              <div className="radius-color">+</div>
            </Flex>
          </Flex>
          <img src={logo75} height={'45px'} style={{marginLeft:'16px'}} alt="" />
        </Flex>
      </Popover>
    </>
  );
}
