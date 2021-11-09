import axios from "axios";

const API_URL = "https://projeto15-gamestore-back.herokuapp.com";

const signUp = ({ body }) => axios.post(`${API_URL}/sign-up`, body);

export { signUp };
