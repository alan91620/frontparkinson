import axios from "axios";

export default axios.create({
    //baseURL: "http://127.0.0.1:8080/",
    baseURL: process.env.REACT_APP_TARGET,
    headers: {
        "Content-type": "application/json"
    }
});