import axios from "axios"

//const sgpeFetch = axios

const axiosInstance = axios.create({
    // baseURL: "http://localhost:3001",
    baseURL: "https://s-g-p-e-backend.vercel.app/"
});

export default axiosInstance;