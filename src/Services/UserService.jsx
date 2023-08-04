import axios from "axios";

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