/**
 * 接口配置
 * 
 * 
*/

/**
 * 
 * 请求的方法
 * 
  */ 
 import axios from "axios"
 import base from "./base"

const api = {
   
    getGoodsList(){
        return axios.get(base.goodsList,{
            params
        })
    }

}


export default api