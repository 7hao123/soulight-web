import './Mypagination.css'
import React, { useEffect, useState } from "react";
import { LeftOutlined,RightOutlined,VerticalRightOutlined,VerticalLeftOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
interface PaginationProps {
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  leftText?: string;
  rightText?: string;
  setPageNumber?:any;
  onChange?: (e: number) => void;
}
const Pagination = (
  props: PaginationProps = { pageSize: 10, pageNumber: 1, total: 0 }
) => {
  const {
    pageSize,
    pageNumber,
    total,
    onChange,
    setPageNumber,
    leftText,
    rightText,
  } = props;
  const [paginationPageSize, setPaginationPageSize] = useState(pageSize); //页面容量
  // const [pageNumber, setPageNumber] = useState(pageNumber); //页面当前编号
  const [paginationTotal, setPaginationTotal] = useState(total); //总数量
  const [totalPageSize, setTotalPageSize] = useState(0); //总页码
  function handlePage(page){
    setPageNumber(page)
  }
  useEffect(() => {
    setTotalPageSize(Math.ceil(paginationTotal! / paginationPageSize!));
  }, []); //pageNumber
  const initPage = () => {
    if (totalPageSize <= 7) {
      return Array(totalPageSize)
        .fill(1)
        .map((item, index) => (
          <div
            className={
              pageNumber === index + 1
                ? "pagination_item pagination_item_actived"
                : "pagination_item"
            }
            onClick={()=>handlePage(index+1)}
            key={index + Math.random()}
          >
            {index + 1}
          </div>
        ));
    }
    if (pageNumber! <= 4) {
      //前6个+省略+最后一个
      return (
        <>
          {Array(6)
            .fill(1)
            .map((item, index) => (
              <div
                className={
                  pageNumber === index + 1
                    ? "pagination_item pagination_item_actived"
                    : "pagination_item"
                }
                onClick={()=>handlePage(index+1)}
                key={index + Math.random()}
              >
                {index + 1}
              </div>
            ))}
          <div
            className="pagination_simple"
            // onClick={() => {
            //   if (pageNumber! + 5 >= totalPageSize) {
            //     setPageNumber(totalPageSize);
            //     onChange && onChange!(totalPageSize);
            //   } else {
            //     setPageNumber(pageNumber! + 5);
            //     onChange && onChange!(pageNumber! + 5);
            //   }
            // }}
          >
            <div className='shenglue'>...</div>
          </div>
          <div
            className={
              pageNumber === totalPageSize
                ? "pagination_item pagination_item_actived"
                : "pagination_item"
            }
            onClick={()=>handlePage(totalPageSize)}
            key={pageNumber! + Math.random()}
          >
            {totalPageSize}
          </div>
        </>
      );
    }
    //第1个+省略+当前页码前后5个+省略+最后一个
    if (
      pageNumber! >= 5 &&
      pageNumber! <= totalPageSize - 4
    ) {
      return (
        <>
          <div
            className={
              pageNumber === 1
                ? "pagination_item pagination_item_actived"
                : "pagination_item"
            }
            key={0 + Math.random()}
            onClick={()=>handlePage(1)}
          >
            1
          </div>
          <div
            className="pagination_simple"
            // onClick={() => {
            //   if (pageNumber! - 5 <= 1) {
            //     setPageNumber(1);
            //     onChange && onChange!(1);
            //   } else {
            //     setPageNumber(pageNumber! - 5);
            //     onChange && onChange!(pageNumber! - 5);
            //   }
            // }}
          >
            <div className='shenglue'>...</div>
          </div>
          {Array(5)
            .fill(pageNumber! - 2)
            .map((item, index) => (
              <div
                className={
                  pageNumber === item + index
                    ? "pagination_item pagination_item_actived"
                    : "pagination_item"
                }
                key={item - Math.random()}
                onClick={()=>handlePage(index + item)}
              >
                {item + index}
              </div>
            ))}
          <div
            className="pagination_simple"
            // onClick={() => {
            //   if (pageNumber! + 5 >= totalPageSize) {
            //     setPageNumber(totalPageSize);
            //     onChange && onChange!(totalPageSize);
            //   } else {
            //     setPageNumber(pageNumber! + 5);
            //     onChange && onChange!(pageNumber! + 5);
            //   }
            // }}
          >
            <div className='shenglue'>...</div>
          </div>
          <div
            className={
              pageNumber === totalPageSize
                ? "pagination_item pagination_item_actived"
                : "pagination_item"
            }
            key={totalPageSize - Math.random()}
            onClick={()=>handlePage(totalPageSize)}
          >
            {totalPageSize}
          </div>
        </>
      );
    }
    //展示第1个+省略+后6个
    return (
      <>
        <div
          className={
            pageNumber === 1
              ? "pagination_item pagination_item_actived"
              : "pagination_item"
          }
          key={0 + Math.random()}
          onClick={()=>handlePage(1)}
        >
          1
        </div>
        <div
          className="pagination_simple"
          // onClick={() => {
          //   if (pageNumber! - 5 <= 1) {
          //     setPageNumber(1);
          //     onChange && onChange!(1);
          //   } else {
          //     setPageNumber(pageNumber! - 5);
          //     onChange && onChange!(pageNumber! - 5);
          //   }
          // }}
        >
          <div className='shenglue'>...</div>
        </div>
        {Array(6)
          .fill(totalPageSize - 5)
          .map((item, index) => (
            <div
              className={
                pageNumber === item + index
                  ? "pagination_item pagination_item_actived"
                  : "pagination_item"
              }
              onClick={()=>handlePage(index+item)}
              key={item - Math.random()}
            >
              {item + index}
            </div>
          ))}
      </>
    );
  };
  return (
    <Flex className="pagination" gap='16px'>
    <div
        onClick={() => handlePage(1)
        
        }
        className={
          pageNumber === 1
            ? "pagination_left pagination_left_disabled"
            : "pagination_left"
        }
      >
        <VerticalRightOutlined/>
      </div>


      <div
        onClick={() => {
          if (pageNumber !== 1) {
            setPageNumber(pageNumber! - 1);
            onChange && onChange!(pageNumber! - 1);
          }
        }}
        className={
          pageNumber === 1
            ? "pagination_left pagination_left_disabled"
            : "pagination_left"
        }
      >
        {leftText}
      </div>
      {initPage()}
      <div
        className={
          pageNumber ===
          Math.ceil(paginationTotal! / paginationPageSize!)
            ? "pagination_right pagination_right_disabled"
            : "pagination_right"
        }
        onClick={() => {
          if (
            pageNumber !==
            Math.ceil(paginationTotal! / paginationPageSize!)
          ) {
            setPageNumber(pageNumber! + 1);
            onChange && onChange!(pageNumber! + 1);
          }
        }}
      >
        {rightText}
      </div>
      <div
        className={
          pageNumber ===
          Math.ceil(paginationTotal! / paginationPageSize!)
            ? "pagination_right pagination_right_disabled"
            : "pagination_right"
        }
        onClick={() => handlePage(totalPageSize)
    }
      >
        <VerticalLeftOutlined/>
      </div>
    </Flex>
  );
};
Pagination.defaultProps = {
  pageNumber: 1,
  pageSize: 10,
  total: 0,
  showQuickJumper: false,
  leftText: (<LeftOutlined/>),
  rightText: (<RightOutlined/>),
};
export default Pagination;
