import axios from "axios";
import { server } from "../server";
import { toast } from "react-hot-toast";
import { getAccess, getAccessToken } from "../helpers/auth";


export const fetchDoctors= async()=>{
  try{
    const token= await getAccess();
    const token1= getAccessToken();
    const headers={
      Authorization :`Bearer${token}`,
    };
    const response= await axios.get(`${server}/doctor/list`,{
      headers
    })
    return response.data
  }catch(error){
    console.error('error for frtching doctors',error)
  }

}

