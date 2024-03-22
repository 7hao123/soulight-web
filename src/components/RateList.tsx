import { Flex } from "antd"
interface RateMessage{
    num:string,
    content:string
}
const style1 = {
    color:'purple',
    fontWeight:'700'
}

const style2 = {
    color:'#999'
}

export default function RateList({num,content}:RateMessage){
    return(
        <Flex  vertical align="start">
            <span style={style1}>{num}</span>
            <span style={style2}>{content}</span>
        </Flex>
    )
}