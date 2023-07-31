import axios from "axios"
import { productsRequest, productsSuccess, productsfailure } from "../slices/productsSlice"


export const getProducts=async(dispatch)=>{
    try{
       dispatch(productsRequest())
const  {data}=await axios.get('/api/v1/products')
dispatch(productsSuccess(data))
}catch(error){
    dispatch(productsfailure(error.response.data.message))

}}