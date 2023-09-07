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
export const fetchBooking= async()=>{
  try{
    const token=await getAccess()
    const token1 = getAccessToken()
    const headers={
      Authorization :`Bearer${token}`
    };
    const response = await axios.get(`${server}/booking/all-bookings/`,{
      headers
    })
    return response.data
  }catch(error){
    console.error("error for frtching all bookings",error)
    return null
  }
}

export const blockUser = async (user_id)=>{
  try{
    const token =await getAccess()
    const token1= getAccessToken()

    const headers={
      Authorization :`Bearer${token}`
    };
    const response = await axios.post(`${server}/api/block-user/${user_id}/`,{
      headers
    })
    console.log(response)
    return response.data
  }catch(error){
    console.error('error for blocking user')
    return null
  }
}

export const fetchUserData= async ()=>{
  try{
    const token = await getAccess()
    const token1=getAccessToken()
    const headers={
      Authorization :`Bearer${token}`
    };
    const response = await axios.get (`${server}/api/user-list/`,{
      headers
    })
    console.log(response)
    return response.data
  }catch(error){
    console.error('error for fetching users',error)
    return null
  }
}