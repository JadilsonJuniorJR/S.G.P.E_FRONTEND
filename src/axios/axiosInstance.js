import axios from "axios"

//const sgpeFetch = axios

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
});

export default axiosInstance;