import { fetchDataStart,fetchDataFailure,fetchDataSuccess } from "./createSlice";
import { fetchData,postData,updateData } from "./api";
import { useDispatch } from "react-redux";
const dispatch=useDispatch();
export const fetchRemoteDATA=()=>{
    dispatch(fetchData());
    fetchData()
    .then((data)=>{dispatch (fetchDataSuccess(data))})
    .catch((Error)=>{dispatch(fetchDataFailure(Error))})
}
export const postRemoteData=(data)=>{
    postData(data).then(responseData) =>{ };
}