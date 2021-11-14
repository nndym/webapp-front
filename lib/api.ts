import axios from "axios";

export function getStrapiUrl(path = ""){
    return `${
        process.env.BACKEND_BASE_URL || "https://api.nndym.org"
    }${path}`;
}

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export async function fetchAPI(path:string) {
    const requestUrl = getStrapiUrl(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
}

export default api;