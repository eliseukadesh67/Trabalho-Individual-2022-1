import axios from "axios";

export const BASE_API = axios.create({
    baseURL: process.env.API_URL
});