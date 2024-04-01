import { Flex } from "antd"
interface RateMessage{
    num:string,
    content:string
}
const style1 = {
    color:'#7047a2',
    fontWeight:'700',
    fontSize:'18px'
}

const style2 = {
    color:'#8e8e8e',
    fontSize:'12px',
    fontWeight:'bold'
}

export default function RateList2({num,content}:RateMessage){
    return(
        <Flex  vertical gap='small' align="center">
            <span style={style1}>{num}</span>
            <span style={style2}>{content}</span>
        </Flex>
    )
}