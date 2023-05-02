import {
    DELETE_PRODUCT,
  GET_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_ERROR,
  PRODUCT_REQUEST,
} from "./actionTypes";
import axios from "axios";

export const reqObj = () => {
  return { type: PRODUCT_REQUEST };
};

export const getProductObj = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};

export const postProductObj = () => {
  return { type: POST_PRODUCT_SUCCESS };
};

export const errObj = () => {
  return { type: PRODUCT_ERROR };
};

export const deleteObj = () => {
    return {type:DELETE_PRODUCT}
}

export const getProduct = () => (dispatch) => {
  dispatch(reqObj());
  axios
    .get(`https://mock-9-j4mu.onrender.com/products`)
    .then((res) => {
      console.log(res.data);
      dispatch(getProductObj(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(errObj());
    });
};


export const getProductcat = (category) => (dispatch) => {
    dispatch(reqObj());
    axios
      .get(`https://mock-9-j4mu.onrender.com/products?${category}`)
      .then((res) => {
        console.log(res.data);
        dispatch(getProductObj(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(errObj());
      });
  };


export const deleteProduct = (id) => (dispatch) => {
    dispatch(reqObj());
    axios.delete(`https://mock-9-j4mu.onrender.com/products/${id}`).then((res)=>{
        console.log(res.data)
    }) .catch((err) => {
        console.log(err);
        dispatch(errObj());
      });
}

export const postProduct = (payload) => (dispatch) => {
  dispatch(reqObj());
  axios
    .post(`https://mock-9-j4mu.onrender.com/products`, payload)
    .then((res) => {
      console.log(res.data);
      dispatch(postProductObj())
    })
    .catch((err) => {
      console.log(err);
      dispatch(errObj());
    });
};
