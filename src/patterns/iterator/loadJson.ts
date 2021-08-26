import fetch from "node-fetch";
export default async function loadJSON(url: string) {
    return fetch(url).then(res=>res.json());
}