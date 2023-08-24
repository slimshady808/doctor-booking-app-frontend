import axios from "axios";
import {getAccess,getAccessToken} from '../helpers/auth'
import {server} from '../server'
export const fetchDoctorData = async (doctorId) => {
  try {
    const response = await axios.get(`http://localhost:8000/doctor/doctor/${doctorId}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching doctor data:', error);
    return null;
  }
};

export const fetchDepartmentById = async (departmentId)=>{
  try{
    const response = await axios.get(`http://localhost:8000/doctor/department/${departmentId}/`);
    return response.data;
  }catch(error){
    console.error('error fetching department by id:',error)
    return null
  }
}

export const fetchQualificationById = async (qualificationId)=>{
  try{
    const response = await axios.get(`http://localhost:8000/doctor/qualification/${qualificationId}/`);
    return response.data;
  }catch(error){
    console.error('error fetching qualification by id:',error)
    return null
  }
}

export const fetchAddressById = async (addressId)=>{
  try{
    const response = await axios.get(`http://localhost:8000/doctor/address_edit/${addressId}/`);
    return response.data
  }catch(error){
    console.error('error of fetching address data:',error)
    return null
  }
}

export const fetchAvailableDates = async (doctorId)=>{
  try{
    const response = await axios.get(`http://localhost:8000/doctor/get_available_dates/${doctorId}/`);
    return response.data.available_dates
  }catch(error){
    console.error('error of getting available dates:',error)
    return null
  }
}

export const fetchAvailableSlots = async (doctorId,date)=>{
  try{
    const response = await axios.get(`http://localhost:8000/doctor/get_available_slots/${doctorId}/?date=${date}`);
    return response.data.available_slots
  }catch(error){
    console.log('error of getting available slotes:',error)
    return null
  }
}

export const fetchPatients = async (userId)=>{
  try{
    const response = await axios.get(`http://localhost:8000/api/patients/${userId}/`)
    return response.data
  }catch(error){
    console.error('error of getting patients:',error)
    return null
  }
}
export const createPatient= async (newPatientDetails)=>{
  try {
    const response = await axios.post(`${server}/api/create-patient/`, newPatientDetails);
    console.log("Patient created successfully:", response.data.id);
    return response.data.id;
  }
  catch(error){
    console.error("Error creating patient:", error);
  }
}
export const createBooking = async (bookingData)=>{
  try{
    const token1 = await getAccess();
    const token = getAccessToken();
    console.log(token1,'token1')
    console.log(token,'token')
    const response = await axios.post(`${server}/booking/create/`,bookingData,{
      headers:{
        Authorization:`Bearer ${token1}`,
      },
    });
    console.log(response.data)
    return response.data.booking_id
  }catch(error){
    console.error("Error creating booking:", error);
}
}

export const fetchSlotData = async (slotid)=>{
  try{
    const response=await axios.get(`${server}/doctor/slot/${slotid}/`)
    console.log(response.data,'function')
    return response.data
  }catch(error){
    console.log('error for fetching slot details')
    return null
  }
}


export const fetchUserBookingHistory= async()=>{
  try{
    const token1 = await getAccess();
    const token = getAccessToken();
    console.log(token1)
    const headers={
      Authorization : `Bearer ${token1}`,
    };
    const response = await axios.get (
        `${server}/booking/user-booking-history/`,
        {headers}
    );
    return response.data
  }catch(error){
    console.log('error fetchig user booking history:',error)
    return null
  }

};

export const fetchReview = async (doctorId)=>{
  try{
    const token = await getAccess()
    const token1 = getAccessToken()
    const headers = {
      Authorization:`Bearer ${token1}`,
    };
    const response = await axios.get (`${server}/review/review-list/${doctorId}/`,
    // {headers}
    );
    return response.data
  }catch(error){
    console.error('error for fetching review:',error)
    return null
  }
}

export const createReview = async (formData)=>{
  try{
    const token= await getAccess();
    const token1= getAccessToken()
    const headers = {
      Authorization :`Bearer ${token}`,
    };
    const response = await axios.post(`${server}/review/create/`,formData,{
      // headers
    })
    return response.data

  }catch(error){
    console.log('error creating review:',error)
    return null
  }
}


export const updateReview = async (review_id,formData)=>{
  try{
  const token= await getAccess();
  const token1= getAccessToken()
  const headers = {
    Authorization : `Bearer ${token}`,
  };
  const response = await axios.put(`${server}/review/update/${review_id}/`,formData,{
    // headers
  })
  return response.data
}catch(error){
  console.error('error for updating review:',error)

  return null
}

}


