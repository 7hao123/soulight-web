import { createSlice } from '@reduxjs/toolkit';  
  
// 定义订单的状态结构  
const initialState = {  
  orders:  JSON.parse(localStorage.getItem('orders')!)||[], 
};  
  
// 定义订单对象的结构  
// const orderFields = {  
//   name: '',  
//   birth: '',  
//   gender: '',  
//   situation: '',  
//   question: '',  
//   time:'',
//   img:''
// };  
  
const ordersSlice = createSlice({  
  name: 'orders',  
  initialState,  
  reducers: {  
    // 添加一个新订单  
    addOrder: (state, action) => {  
        // console.log(action.payload);
       state.orders.push(action.payload)
       
      //  localStorage.setItem(order,JSON.stringify())
       
       
        
    //   const newOrder = { ...orderFields, ...action.payload };  
    //   state.orders.push(newOrder);  
    },  }
  
 
});  
  
// 导出actions和reducer  
export const { addOrder } = ordersSlice.actions;  
  
export default ordersSlice.reducer;