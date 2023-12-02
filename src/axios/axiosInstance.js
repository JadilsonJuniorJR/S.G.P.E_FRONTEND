import axios from "axios"

//const sgpeFetch = axios

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
});

export default axiosInstance;