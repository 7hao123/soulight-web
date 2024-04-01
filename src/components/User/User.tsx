import './User.css'
import { Flex,Popover } from 'antd'
import female from '../../assets/female_1.png'
export default function User(){
    const name = ''
    const content = (
        <Flex vertical>
            <a>My Account</a>
            <a>My Order</a>
            <a>Sign Out</a>
        </Flex>
    )
    return(
        <>
        <Popover placement='bottom' content={content}>
        <Flex align='center' gap='small' className='user'>
            <img src={female}  height={'45px'} alt="" />
            <Flex vertical>
                <p className='name'>Hi,{name?name:'977673894111111'}</p>
                <Flex >
                <div className="radius-no-color">

</div>
                    <div className="account">
                            $1234.67
                    </div>
                    <div className="radius-color">
            +
        </div>
                </Flex>
            </Flex>
        </Flex>
        </Popover>
       
        </>
    )
}