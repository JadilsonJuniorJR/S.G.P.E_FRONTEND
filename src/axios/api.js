import axios from "axios"

//const sgpeFetch = axios

const api = axios.create({
    baseURL: "https://api.github.com",
});

export default api;