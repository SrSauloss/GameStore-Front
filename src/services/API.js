import axios from "axios";

const API_URL = "https://projeto15-gamestore-back.herokuapp.com";

const signUp = ({ body }) => axios.post(`${API_URL}/sign-up`, body);
const signIn = ({ body }) => axios.post(`${API_URL}/sign-in`, body);
const listProducts = () => axios.get(`${API_URL}/product/all`);
const listProductInfo = ({ id }) => axios.get(`${API_URL}/product/${id}`);
export { signUp, signIn, listProducts, listProductInfo };
