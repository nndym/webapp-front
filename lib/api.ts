export function getStrapiUrl(path = ""){
    return `${
        process.env.BACKEND_BASE_URL || "https://api.nndym.org"
    }${path}`;
}

export async function fetchAPI(path:string) {
    const requestUrl = getStrapiUrl(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
}