import axios from "axios";

// const baseURL = "http://localhost:3333";
const baseURL = 'https://cl-api-w6bu.onrender.com';

export const api = axios.create({
    baseURL,
});

export const apiPrivate = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json'},
    withCredentials: true,
});