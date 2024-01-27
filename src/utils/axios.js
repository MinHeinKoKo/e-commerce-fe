import Axios from "axios";

const apiConfig = {
    baseUrl : "http://localhost:8000/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
}

const axios = Axios.create(apiConfig);

export default axios;

export const BASE_URL = "http://localhost:8000/api"