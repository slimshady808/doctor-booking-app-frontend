import axios from "axios";
import {server} from '../server'
import {getAccess,getAccessToken} from '../helpers/auth'
import { toast } from "react-hot-toast";





export const fetchPendingBooking = async (doctorId) => {
  try {
    const token =await getAccess();
    const token1 = getAccessToken(); 
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(
      `${server}/booking/pending-booking/${doctorId}/`,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.log('Error fetching pending bookings:', error);
    return null;
  }
};


export const fetchBookingHistory = async (doctorId)=>{
  try{
    const token= await getAccess();
    const token1= getAccessToken();
    const headers={
      Authorization:`Bearer ${token}`,
    };
    const response = await axios.get(`${server}/booking/booking-history/${doctorId}/`,
    {headers}
    );
    return response.data;

  }catch(error){
    console.log('error for frtching booking history:',error)
    return null
  }
}

export const createReport = async(formData)=>{
  try{
    const token = await getAccess();
    const token1 = getAccessToken();
    console.log(token1)
    const response= await axios.post(`${server}/report/create/`,formData,{
      headers:{
        Authorization:`Bearer ${token}`,
      },
    });
    console.log(response.data)
    toast.success('saved')
    return response.data

  }catch(error){
    console.log('error for creating report :',error)
    return null
  }
}


export const getReport = async (booking_id)=>{
  try{
    const token1 = await getAccess();
    const token = getAccessToken();
    // console.log(token1)
    const response = await axios.get(
      `${server}/report/get-report/${booking_id}/`,
      {
        headers :{
          Authorization : `Bearer ${token1}`,
        }
      }
    );
    return response.data;
  }catch(error){
    console.log('report not available',null)
    return null
  }
}

export const updateReport = async (reportId,formData)=>{
  try{
    const token1 = await getAccess();
    const token = getAccessToken();
    const response = await axios.put(
      `${server}/report/update/${reportId}/`,
      formData,
      {
        headers:{
          Authorization: `Bearer ${token1}`,
        },
      }
    )
    toast.success('updated')
    return response.data
  }catch(error){
    console.log('ERROR UPDATING   report :',error)
    return null
  }
}

export const get_test_titles = async()=>{
  try{
    const token1 = await getAccess();
    const token = getAccessToken();
    const response = await axios.get(
      `${server}/report/test-titles/`,
      {
        headers:{
          Authorization :`Bearer ${token1}`,
        }
      }
    )
    return response.data
  }catch(error){
    console.log('error fetching test titles',error)
    return null
  }
}

export const createTest = async (testData)=>{
  try{
    const token = getAccessToken()
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.post(`${server}/report/test-create/`,testData,{
      // headers,
    });
    return response.data
  }catch(error){
     console.log('Error creating test:', error);
    return null;
  
  }
}

export const fetchTests = async (report_id)=>{
  try{
    const token= getAccessToken()
    const response = await axios.get(`${server}/report/test-list/${report_id}/`,{
      // headers:{
      //   Authorization:`Bearer ${token},`
      // }
    })
    return response.data
  }catch(error){
    console.log('error fetching test list:',test)
    return null
  }
}

export const deleteTest = async (test_id)=>{
  try{
    const response = await axios.delete(`${server}/report/delete/${test_id}/`)
   
    console.log(response,'dlt')
    return response.status
  }catch(error){
    toast.error("can't delete this data")
    return null
  }
}

export const fetchReview = async (doctor_id)=>{
  try{
    const token = await getAccess()
    const token1 = getAccessToken()
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(`${server}/review/review-list/${doctor_id}/`,
    {headers}
    );
    console.log(response,'review coming')
    return response.data
  }catch(error){
    console.log('error on fetching review in doctor side:',error)
    return null
  }
}
