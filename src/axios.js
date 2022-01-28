// axios
import axios from "axios";

//const baseURL = "http://hnh.local:8085/api";
// const baseURL = 'https://api-hnh.enigma-tech.in/api'

const baseURL = process.env.VUE_APP_BASE_URL;

export default axios.create({
	baseURL,
	// You can add your headers here
});
