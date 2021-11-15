import axios from "axios";

const API_URL = "https://projeto15-gamestore-back.herokuapp.com";

const createHeaders = (token) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

const signUp = ({ body }) => axios.post(`${API_URL}/sign-up`, body);
const signIn = ({ body }) => axios.post(`${API_URL}/sign-in`, body);
const listProducts = () => axios.get(`${API_URL}/product/all`);
const listProductInfo = ({ token, id }) =>
  axios.get(`${API_URL}/product/${id}`, createHeaders(token));
const postTransaction = ({ token, body }) =>
  axios.post(`${API_URL}/product/transaction/new`, body, createHeaders(token));
const listCategories = ({ token }) =>
  axios.get(`${API_URL}/product/categories`, createHeaders(token));
const listProductsCategory = ({ token, id }) =>
  axios.get(`${API_URL}/product/category/${id}`, createHeaders(token));

export {
  signUp,
  signIn,
  listProducts,
  listProductInfo,
  postTransaction,
  listCategories,
  listProductsCategory,
};
