import OrderItem from "../OrderItem/OrderItem"
import MyPagination from "../MyPagination/MyPagination"
import './MyOrder.css'
export default function MyOrder(){
    
    return(
        <>
        <div style={{width:'80%',marginTop:'60px'}}>
        {
            [1,2,3,4,5,6].map(item=>
                (
                    <>
                         <OrderItem/>
                         {item < 6 && <div className="separator"></div>}
                    </>
                )
                )
        }
        <MyPagination/>
        
        
      
  
        </div>
        </>
        

    )
}