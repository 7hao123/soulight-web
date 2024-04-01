import    React from 'react';  
import {  Pagination } from 'antd'; 
import type {PaginationProps}  from 'antd'
import { VerticalLeftOutlined,VerticalRightOutlined,LeftOutlined,RightOutlined } from '@ant-design/icons';
// {currentPage,totalPages,setPage}
import './MyPagination.css'
// interface PagProps{
//     total:number,
//     defaultPageSize :number,
//     currentPage:number
//     setCurrentPage:any
// }



export default function MyPagination({total,defaultPageSize,current,setCurrent}:any){
    // const [current, setCurrent] = React.useState<number>(1);
    const onChange: PaginationProps["onChange"] = (page) => {
      setCurrent(page);
    };
    const itemRender: PaginationProps["itemRender"] = (
      _,
      type,
      originalElement
    ) => {
      if (type === "prev") {
        return (
          <div>
            <button className='btn'
              disabled={current === 1}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(1);
              }}
            >
              <VerticalRightOutlined className='icon'/>
            </button>
            <button className='btn' disabled={current === 1}><LeftOutlined   className='icon'/></button>
          </div>
        );
      }
      if (type === "next") {
        return (
          <div className='box'>
            <button className='btn' disabled={current === (total/defaultPageSize + 1)}><RightOutlined className='icon'/></button>
            <button className='btn'
              disabled={current === (total/defaultPageSize + 1)}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent((total/defaultPageSize + 1));
              }}
            >
              <VerticalLeftOutlined className='icon'/>
            </button>
          </div>
        );
      }
      return originalElement;
    };
    return (<>
    

<Pagination  className='pag'
  total={total}
  current={current}
  onChange={onChange}
  itemRender={itemRender}
  defaultPageSize={defaultPageSize}
  showSizeChanger={false}
/>
    </>
   
    );
  
}