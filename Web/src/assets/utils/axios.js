import { baseUrl } from "./env";
import axios from "axios";
const service = axios.create({
    baseURL  : baseUrl,
})

//请求拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
        return Promise.reject()
    }
)

//相应拦截器
service.interceptors.response.use(
    response => {
        if(response.status == 200){
            return response.data
        }else{
            Promise.reject()
        }
    },
    error => {
        console.log(error)
        return Promise.reject()
    }
)
export default service