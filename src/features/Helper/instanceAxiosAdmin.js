import axios from "axios";


export const instanceAxiosAdmin = axios.create({
    baseURL: "https://employees.inversal.az",
})