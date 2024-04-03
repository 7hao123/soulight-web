import OrderItem from "../OrderItem/OrderItem";
import MyPagination from "../MyPagination2/Mypagination";
import {useState} from 'react'
import { Flex,Empty,Breadcrumb } from "antd";
import {  useSelector } from "react-redux";
import "./MyOrder.css";
export default function MyOrder() {
    // const messages = [  
    //     {  
    //       name: "Sans1",  
    //       info: "ewew1",  
    //       order: "Expired",  
    //       condition: "Text Reading1",  
    //       time: "Jun 28, 2023 2:19 PM",  
    //       isOnline: true  
    //     },  
    //     {  
    //       name: "Sans2",  
    //       info: "ewew2",  
    //       order: "Expired",  
    //       condition: "Text Reading2",  
    //       time: "Jun 29, 2023 3:20 PM",  
    //       isOnline: false  
    //     },  
    //     {  
    //       name: "Sans3",  
    //       info: "ewew3",  
    //       order: "Pending",  
    //       condition: "Audio Listening3",  
    //       time: "Jun 30, 2023 4:21 PM",  
    //       isOnline: true  
    //     },  
    //     {  
    //       name: "Sans4",  
    //       info: "ewew4",  
    //       order: "Shipped",  
    //       condition: "Video Watching4",  
    //       time: "Jul 1, 2023 5:22 PM",  
    //       isOnline: false  
    //     },  
    //     {  
    //       name: "Sans5",  
    //       info: "ewew5",  
    //       order: "Cancelled",  
    //       condition: "Text Reading5",  
    //       time: "Jul 2, 2023 6:23 PM",  
    //       isOnline: true  
    //     },  
    //     {  
    //       name: "Sans6",  
    //       info: "ewew6",  
    //       order: "Processing",  
    //       condition: "Audio Listening6",  
    //       time: "Jul 3, 2023 7:24 PM",  
    //       isOnline: false  
    //     },  
    //     {  
    //       name: "Sans7",  
    //       info: "ewew7",  
    //       order: "Completed",  
    //       condition: "Video Watching7",  
    //       time: "Jul 4, 2023 8:25 PM",  
    //       isOnline: true  
    //     },  
    //     {  
    //       name: "Sans8",  
    //       info: "ewew8",  
    //       order: "On Hold8",  
    //       condition: "Text Reading8",  
    //       time: "Jul 5, 2023 9:26 PM",  
    //       isOnline: false  
    //     },  
    //     {  
    //       name: "Sans9",  
    //       info: "ewew9",  
    //       order: "Returned9",  
    //       condition: "Audio Listening9",  
    //       time: "Jul 6, 2023 10:27 PM",  
    //       isOnline: true  
    //     },  
    //     {  
    //       name: "Sans10",  
    //       info: "ewew10",  
    //       order: "Confirmed10",  
    //       condition: "Video Watching10",  
    //       time: "Jul 7, 2023 11:28 PM",  
    //       isOnline: false  
    //     },  
    //     {  
    //       name: "Sans11",  
    //       info: "ewew11",  
    //       order: "Invoiced11",  
    //       condition: "Text Reading11",  
    //       time: "Jul 8, 2023 12:29 AM",  
    //       isOnline: true  
    //     },  
    //     {  
    //       name: "Sans12",  
    //       info: "ewew12",  
    //       order: "Refunded12",  
    //       condition: "Audio Listening12",  
    //       time: "Jul 9, 2023 1:30 AM",  
    //       isOnline: false  
    //     },  
    //     {  
    //       name: "Sans13",  
    //       info: "ewew13",  
    //       order: "Delivered13",  
    //       condition: "Video Watching13",  
    //       time: "Jul 10, 2023 2:31 AM",  
    //       isOnline: true  
    //     }  
    //   ];
      const orders = useSelector((store)=>store.order)
      const messages = orders.orders
      console.log(messages);
      
  
    const pageSize = 6;
  const [currtentPage, setCurrentPage] = useState(1);
  const total = messages.length;
  const startIndex = (currtentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  
  const currentItems = total>0?messages.slice(startIndex, endIndex):[];
  const messageItems: React.ReactNode[] = currentItems.map((message, index) => (
    <div key={message.name}>
      <OrderItem  message={message} />
      {index < currentItems.length - 1 && <div className="separator"></div>}
    </div>
  ));
  return messages.length>0?(
    <>
        <div
        style={{ width: "80%", display: "flex", justifyContent: "flex-start" }}
      >
        <Breadcrumb
          separator=">"
          style={{ margin: "32px 0 32px 0" }}
          items={[
            { title: <a href="/">Home</a> },
         
            { title: "MyOrder" },
          ]}
        ></Breadcrumb>
      </div>
      <div style={{ width: "80%" }}>
        {messageItems}
        <Flex justify="center" style={{ width: "100%", margin: "80px 0" }}>
          <MyPagination
            total={total}
            pageSize={pageSize}
            pageNumber={currtentPage}
            setPageNumber={setCurrentPage}
          />
        </Flex>
      </div>
    </>
  ):(
    <>
     <div
        style={{ width: "80%", display: "flex", justifyContent: "flex-start" }}
      >
        <Breadcrumb
          separator=">"
          style={{ margin: "32px 0 32px 0" }}
          items={[
            { title: <a href="/">Home</a> },
         
            { title: "MyOrder" },
          ]}
        ></Breadcrumb>
      </div>
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{height:'600px'}} />
    </>
   
  );
}
