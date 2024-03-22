import  { useState } from 'react';  
import { Pagination, Button } from 'antd'; 
import type {PaginationProps}  from 'antd'
// {currentPage,totalPages,setPage}
export default function MyPagination(){
    const TotalCount = 500; // 假设总条目数为500  
const PageSize = 10; // 每页显示10条  
  
const [current, setCurrent] = useState(1); // 当前页码  
  
  const goToFirstPage = () => {  
    setCurrent(1);  
  };  
  
  const goToLastPage = () => {  
    const totalPages = Math.ceil(TotalCount / PageSize);  
    setCurrent(totalPages);  
  };  
  
  const onChange = (page) => {  
    setCurrent(page);  
  };  
  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    
    
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };
    return  (
        <div>  
      <Button onClick={goToFirstPage}>跳转到首页</Button>  
      <Button onClick={goToLastPage}>跳转到尾页</Button>  
      <Pagination  
        current={current}  
        pageSize={PageSize}  
        total={TotalCount}  
        onChange={onChange}  
        itemRender={itemRender}
      />  
    </div> 
      )
}