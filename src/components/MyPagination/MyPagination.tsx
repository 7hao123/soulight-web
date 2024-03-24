import    React,{ useState } from 'react';  
import { Pagination, Button } from 'antd'; 
import type {PaginationProps}  from 'antd'
import { VerticalLeftOutlined,VerticalRightOutlined,LeftOutlined,RightOutlined } from '@ant-design/icons';
// {currentPage,totalPages,setPage}
import './MyPagination.css'
export default function MyPagination(){
    const [current, setCurrent] = React.useState<number>(3);
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
            <button className='btn' disabled={current === 500}><RightOutlined className='icon'/></button>
            <button className='btn'
              disabled={current === 500}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(500);
              }}
            >
              <VerticalLeftOutlined className='icon'/>
            </button>
          </div>
        );
      }
      return originalElement;
    };
    return (
      <Pagination  className='pag'
        total={5}
        current={current}
        onChange={onChange}
        itemRender={itemRender}
        defaultPageSize={3}
        showSizeChanger={false}
      />
    );
  
}