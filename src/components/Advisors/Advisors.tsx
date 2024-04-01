import { useState } from "react";
import GuideList from "../GuideList/GuideList";
import MyPagination from '../MyPagination2/Mypagination'
import './Advisors.css'
export default function Advisors() {
  const messages =[
    {  
        image: "#",  
        name: "Harmony Bliss Harmony",  
        character: "Holistic healer Tarot reader",  
        information:  
          "Harmony Bliss is a holistic healer and tarot reader who specializes in providing clients with a balanced and integrated approach to healing. " +  
          "She uses her intuitive abilities and tarot cards to guide clients towards self-discovery and inner peace. " +  
          "Harmony's sessions are deeply personal and transformative, helping clients overcome challenges and achieve harmony in all aspects of their lives.",  
        score: "4.9",  
        reviews: "1987",  
        readings: "9451",  
        services: "4",  
        readingPrice: "$16.50",  
        oldReadingPrice: "$23.99",  
        minPrice: "$11.99",  
        oldMinPrice: "$22.99",  
      },  
      {  
        image: "#",  
        name: "Mystic Vision Mystic",  
        character: "Psychic medium Dream interpreter",  
        information:  
          "Mystic Vision is a renowned psychic medium who specializes in dream interpretation and spirit communication. " +  
          "She uses her unique abilities to connect with the spirit world, providing clients with insights and guidance from their loved ones. " +  
          "Mystic's readings are known for their accuracy and depth, helping clients find answers and closure.",  
        score: "4.8",  
        reviews: "3452",  
        readings: "13784",  
        services: "5",  
        readingPrice: "$18.75",  
        oldReadingPrice: "$26.99",  
        minPrice: "$13.49",  
        oldMinPrice: "$25.99",  
      },  
      {  
        image: "#",  
        name: "Divine Insight Divine",  
        character: "Angel communicator Spiritual advisor",  
        information:  
          "Divine Insight is an angel communicator and spiritual advisor who offers clients guidance and insights from the angelic realm. " +  
          "She uses her intuitive abilities to connect with angels and spirit guides, providing clients with a deeper understanding of their purpose and path. " +  
          "Divine's sessions are transformative and empowering, helping clients make positive changes in their lives.",  
        score: "5.0",  
        reviews: "4890",  
        readings: "18563",  
        services: "6",  
        readingPrice: "$21.25",  
        oldReadingPrice: "$30.49",  
        minPrice: "$15.24",  
        oldMinPrice: "$29.99",  
      },  
      {  
        image: "#",  
        name: "Wisdom Seeker Wisdom",  
        character: "Astrologer Tarot reader",  
        information:  
          "Wisdom Seeker is an astrologer and tarot reader who provides clients with insights and guidance based on their birth charts and tarot readings. " +  
          "She uses her knowledge of the stars and cards to help clients understand their strengths, weaknesses, and future potential. " +  
          "Wisdom's readings are accurate and insightful, helping clients make informed decisions about their lives.",  
        score: "4.7",  
        reviews: "2789",  
        readings: "10976",  
        services: "3",  
        readingPrice: "$15.99",  
        oldReadingPrice: "$22.99",  
        minPrice: "$10.99",  
        oldMinPrice: "$21.99",  
      },  
  ]
  const pageSize = 3;
  const [currtentPage,setCurrentPage] = useState(1)
  const total = messages.length
  const startIndex = (currtentPage -1)*pageSize
  const endIndex = startIndex + pageSize
  const currentItems = messages.slice(startIndex,endIndex)

  const messageItems: React.ReactNode[] = currentItems.map((message, index) => (
    <>
      <GuideList key={message.name} message={message} />
      {index < currentItems.length - 1 && <div className="separator"></div>}
    </>
  ));
  return(
    <>
        {messageItems}
      {/* <MyPagination total={total} defaultPageSize={pageSize}  current={currtentPage} setCurrent={setCurrentPage}/> */}
      <div style={{marginLeft:'300px',marginBottom:'100px'}}>
      <MyPagination total={total} pageSize={pageSize} />
      </div>
    
    </>
  )
}