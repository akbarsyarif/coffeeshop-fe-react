import { createSlice } from "@reduxjs/toolkit";

let i = 0;
const initialState = {
  status_id: null,
  total: 0,
  shipping_id: null,
  productInfo: [],
  product: [],
};

const cartSlice = createSlice({
  name: "userCart",
  initialState,
  reducers: {
    addCart: (prevState, { payload }) => {
      // console.log(payload);
      // console.log({ ...prevState });
      let prevProductInfo = prevState.productInfo;
      let prevProduct = prevState.product;
      // console.log(prevProduct);
      let addProduct = [];
      const newProductInfo = payload.productInfo;
      const newProduct = payload.product;
      if (prevState.product.length === 0) {
        return {
          ...prevState,
          productInfo: [newProductInfo],
          product: [newProduct],
        };
      } else {
        addProduct = prevProduct.push(newProduct);
        prevProductInfo.push(newProductInfo);
      }
      console.log(addProduct);
      console.log(prevProduct);
      // return {
      // ...prevState,
      {
        product: prevProduct;
      }
      // };
    },
    checkOut: (prevState) => {
      return {
        ...prevState,
        status_id: null,
        total: 0,
        shipping_id: null,
        productInfo: [],
        product: [],
      };
    },
  },
});

export const { addCart, checkOut } = cartSlice.actions;
export default cartSlice.reducer;

// [
//   [
//     [
//       [

//       ],
//       [3,1,\"Regular\",true,30000]],
//       [3,4,\"Regular\",true,120000]],
//       [3,11,\"Regular\",true,330000]]
