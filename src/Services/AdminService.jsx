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
// export const fetchBooking= async()=>{
//   try{
//     const token=await getAccess()
//     const token1 = getAccessToken()
//     const headers={
//       Authorization :`Bearer${token}`
//     };
//     const response = await axios.get(`${server}/booking/all-bookings/`,{
//       headers
//     })
//     return response
//   }catch(error){
//     console.error("error for frtching all bookings",error)
//     return null
//   }
// }

export const fetchBooking = async (page) => {
  try {
    const token = await getAccess();
    const token1 = getAccessToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(`${server}/booking/all-bookings/?page=${page}`, {
      headers,
    });
    return response;
  } catch (error) {
    console.error("Error fetching bookings", error);
    return null;
  }
};


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

export const fetchDepartment = async ()=>{
  try{
  const token= await getAccess()
  const token1= getAccessToken()
  const headers = {
    Authorization :`Bearer${token}`
  };
  const response = await axios.get(`${server}/doctor/departments/`,{
    headers
  })
  return response.data
}catch(error){
  console.error('error for fetching departments')
  return null
}
}

export const createDepartment = async(FormData)=>{
  try{
  const token= await getAccess()
  const token1= getAccessToken()
  const headers = {
    Authorization :`Bearer${token}`
  };

  const response = await axios.post(`${server}/doctor/departments/`,FormData,{
    headers
  })
  return response

  }catch(error){
    console.error('error for creating department:',error)
    return null
  }
}
export const getDepartment = async(departmentId)=>{
try{
  const token= await getAccess()
  const token1= getAccessToken()
  const headers = {
    Authorization :`Bearer${token}`
  };
  const response = await axios.get(`${server}/doctor/departments/${departmentId}/`,{
    headers
  })
  return response.data
}catch(error){
  console.error('error for fetching deaprtment by id :',error)
  return null
}
}

export const updateDepartment = async (departmentId,formData)=>{
  try{

    const token= await getAccess()
    const token1= getAccessToken()
    const headers ={
      Authorization :`Bearer${token}`
    }
    const response=await axios.patch(`${server}/doctor/departments/${departmentId}/`,formData,{
      headers
    })
    return response.status
   
    
  }catch(error){
    console.error('error for edtiting  department',error)
  }
}

export const deleteDepartment = async (departmentId)=>{
  try{
    const token= await getAccess()
    const token1= getAccessToken()
    const headers ={
      Authorization :`Bearer${token}`
    }
    const response=await axios.delete(`${server}/doctor/departments/${departmentId}/`,{
      headers
    })
    return response.status

  }catch(error){
    console.error('error for deleting department',error)
    return null
  }
}

export const fetchQualifications=async()=>{

try{
  const token= await getAccess()
  const token1= getAccessToken()
  const headers={
    Authorization:`Bearer${token}`
  }
  const response = await axios.get(`${server}/doctor/qualifications/`,{headers})
  return response.data
}catch(error){
  console.error('error for fetching qualification',error)
}
}

export const createQualifications=async(formData)=>{

  try{
    const token= await getAccess()
    const token1= getAccessToken()
    const headers={
      Authorization:`Bearer${token}`
    }
    const response = await axios.post(`${server}/doctor/qualifications/`,formData,{headers})
    return response.status
  }catch(error){
  
    return null
  }
  }

  export const getQualification =async (id)=>{
    try{
      const token= await getAccess()
      const token1= getAccessToken()
      const headers ={
        Authorization :`Bearer${token}`
      }
      const response = await axios.get(`${server}/doctor/qualifications/${id}/`,{headers})
      return response.data

    }catch(error){
      console.error('error for get qualification',error)
      return null
    }
  }

  export const updateQualification = async (id,formData)=>{
    try{
      const token= await getAccess()
      const token1= getAccessToken()
      const headers ={
        Authorization :`Bearer${token}`
      }
      const response = await axios.patch(`${server}/doctor/qualifications/${id}/`,formData,{headers})
      return response.data
    }catch(error){
      console.error('error for edit qualification',error)
      return null
    }

  }

  export const deleteQualification = async (id) => {
    try {
      const token = await getAccess();
      const token1 = getAccessToken();
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.delete(`${server}/doctor/qualifications/${id}/`, { headers });
      return response.status;
    } catch (error) {
      console.error('Error deleting qualification', error);
      return null;
    }
  };

export const fetchTestTitles=async()=>{

    try{
      const token= await getAccess()
      const token1= getAccessToken()
      const headers={
        Authorization:`Bearer${token}`
      }
      const response = await axios.get(`${server}/report/test-titles/`,{headers})
      return response.data
    }catch(error){
      console.error('error for fetching test titles',error)
    }
}

export const createTestTitle= async (formData)=>{

  try{
    const token = await getAccess()
    const token1 = getAccessToken()
    const headers={
      Authorization : `Bearer${token}`
    }
    const response = await axios.post(`${server}/report/test-titles/`,formData,{headers})
    return response.status 
  }catch(error){
    console.error('error for creating testtitles',error)
    return null
  }

}

export const deleteTestTitles = async(id)=>{
  try{
    const token = await getAccess()
    const token1 = getAccessToken()
    const headers={
      Authorization : `Bearer${token}`
    }
    const response = await axios.delete(`${server}/report/test-titles/${id}/`,{headers})
    return response.status
  }catch(error){
    console.error('error for deleting test titles',error)
    return null
  }
}
export const updateTestTitle = async (id,formData)=>{
  try{
    const token = await getAccess()
    const token1 = getAccessToken()
    const headers = {
      Authorization : `Bearer${token}`
    }
    const response= await axios.patch(`${server}/report/test-titles/${id}/`,formData,{headers})
    return response.status
  }catch(error){
    console.error('error for updating test',error)
    return null
  }
}

export const getTestTitle = async (id)=>{
  try{
    const token = await getAccess()
    const token1 = getAccessToken()
    const headers = {
      Authorization : `Bearer${token}`
    }
    const response = await axios.get(`${server}/report/test-titles/${id}/`,{headers})
    return response.data
    
  }catch(error){
    console.error('error for get testtitles',error)
  }
}
