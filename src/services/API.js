import axios from "axios";

const API_URL = "http://localhost:4000";

const signUp = ({ body }) => axios.post(`${API_URL}/sign-up`, body);

export { signUp };
