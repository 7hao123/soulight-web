import { Flex } from "antd"
interface RateMessage{
    num:string,
    content:string
}
const style1 = {
    color:'#76429a',
    fontWeight:'700',
}

const style2 = {
    color:'#999',
    fontSize:'12px'
}

export default function RateList({num,content}:RateMessage){
    return(
        <Flex  vertical align="start">
            <span style={style1}>{num}</span>
            <span style={style2}>{content}</span>
        </Flex>
    )
}