import axios from "axios"

//const sgpeFetch = axios

const axiosInstance = axios.create({
    // baseURL: "http://localhost:3001",
    baseURL: "https://sleepy-dog-leg-warmers.cyclic.app/"
});

export default axiosInstance;