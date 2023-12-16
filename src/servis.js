import axios from "axios";

export function doGet(url){
    return axios.get('https://jsonplaceholder.typicode.com'+url)
}
