import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AddDoctor = () => {
  const navigate =useNavigate()
  const [doctorData,setDoctorData] =useState({
    doctor_name :'',
    doctor_image:null,
    email:'',
    username:'',
    doctor_department:'',
    qualification:'',
    phone:'',
    fee:'',
    more_details:'',
    address:{
      state:'',
      district:'',
      street:'',
      building:'',
      room:'',
      latitude:'',
      longitude:'',
    },
  });

  const[departments,setDepartments]=useState([])
  const [qualifications,setQualifications]=useState([])

  useEffect(() => {
    async function getDepartment() {
      try {
        const response = await axios.get("http://localhost:8000/doctor/departments/");
        setDepartments(response.data);
      } catch (error) {
       
        console.error("Error fetching departments:", error);
      }
    }
    getDepartment();
  }, []);

  useEffect(() => {
    async function getQualification() {
      try {
        const response = await axios.get("http://localhost:8000/doctor/qualifications/");
        setQualifications(response.data);
      } catch (error) {
        
        console.error("Error fetching qualifications:", error);
      }
    }
    getQualification();
  }, []);


 const handleChange=(e)=>{
  const {name,value}=e.target;
  setDoctorData((prevData)=>({
    ...prevData,
    [name]:value,
  }));
 };

 const handleAddressChange = (e)=>{
  const {name,value}=e.target;
  setDoctorData((prevData)=>({
    ...prevData,
    address :{
      ...prevData.address,
      [name]:value,
    },
  }));
 };

 const handleImageChange = (e)=>{
  setDoctorData((prevData)=>({
    ...prevData,
    doctor_image:e.target.files[0],
  }));
 };


const handleSubmit = async (e) =>{
  e.preventDefault();
  try{
    const addressData={
      state:doctorData.address.state,
      district:doctorData.address.district,
      street:doctorData.address.street,
      building:doctorData.address.building,
      room:doctorData.address.room,
      latitude:doctorData.address.latitude,
      longitude:doctorData.address.longitude
    };
    const addressResponse = await axios.post("http://localhost:8000/doctor/address_create/",addressData);

    const addressId=addressResponse.data.id;
    console.log(addressData)
    console.log('address created',addressId)
    const formData= new FormData();
    formData.append('doctor_name',doctorData.doctor_name)
    formData.append('doctor_image', doctorData.doctor_image);
    formData.append('email', doctorData.email);
    formData.append('username', doctorData.doctor_name);
    formData.append('doctor_department', doctorData.department);
    formData.append('qualification', doctorData.qualification);
    formData.append('phone', doctorData.phone);
    formData.append('fee', doctorData.fee);
    formData.append('more_details', doctorData.more_details);
    formData.append('address',addressId);
    console.log(formData,'full data')
    const response = await axios.post('http://localhost:8000/doctor/register/',formData,{
      headers:{
        'Content-Type':'multipart/form-data',
      },
    });
    console.log(response.data)
    navigate('/admin/doctor_management')
  }catch(error){
    console.error(error)
  }
};






  return (
    <div className="max-w-lg mx-auto my-8 px-4">
    <h2 className="text-2xl font-bold mb-4">Add Doctor</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-4">
        <label className="text-gray-600">Doctor Name:</label>
        <input
          type="text"
          name="doctor_name"
          value={doctorData.doctor_name}
          onChange={handleChange}
          className="form-input block w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div className="flex items-center space-x-4">
        <label className="text-gray-600">Doctor Image:</label>
        <input
          type="file"
          name="doctor_image"
          onChange={handleImageChange}
          className="form-input block w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div className="flex items-center space-x-4">
        <label className="text-gray-600">Email:</label>
        <input
          type="email"
          name="email"
          value={doctorData.email}
          onChange={handleChange}
          className="form-input block w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      {/* <div className="flex items-center space-x-4">
        <label className="text-gray-600">Password:</label>
        <input
          type="password"
          name="password"
          value={doctorData.password}
          onChange={handleChange}
          className="form-input block w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-indigo-500"
          required
        />
      </div> */}

      {/* Department dropdown */}
      <div className="flex items-center space-x-4">
        <label className="text-gray-600">Department:</label>
        <select
          name="department"
          value={doctorData.department}
          onChange={handleChange}
          className="form-select block w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-indigo-500"
          required
        >
          <option value="">Select Department</option>
          {departments.map((department) => (
            <option key={department.id} value={department.id}>
              {department.name}
            </option>
          ))}
        </select>
      </div>

      {/* Qualification dropdown */}
      <div className="flex items-center space-x-4">
        <label className="text-gray-600">Qualification:</label>
        <select
          name="qualification"
          value={doctorData.qualification}
          onChange={handleChange}
          className="form-select block w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-indigo-500"
          required
        >
          <option value="">Select Qualification</option>
          {qualifications.map((qualification) => (
            <option key={qualification.id} value={qualification.id}>
              {qualification.title}
            </option>
          ))}
        </select>
      </div>

      {/* Phone */}
      <div className="flex items-center space-x-4">
        <label className="text-gray-600">Phone:</label>
        <input
          type="tel"
          name="phone"
          value={doctorData.phone}
          onChange={handleChange}
          className="form-input block w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      {/* Fee */}
      <div className="flex items-center space-x-4">
        <label className="text-gray-600">Fee:</label>
        <input
          type="number"
          name="fee"
          value={doctorData.fee}
          onChange={handleChange}
          className="form-input block w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      {/* More Details */}
      <div className="flex items-center space-x-4">
        <label className="text-gray-600">More Details:</label>
        <textarea
          name="more_details"
          value={doctorData.more_details}
          onChange={handleChange}
          className="form-textarea block w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-indigo-500"
          rows={4}
        />
      </div>

      {/* New Address Row */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold">Address</h3>
        <div className="flex items-center space-x-4">
          <label className="text-gray-600">State:</label>
          <input
            type="text"
            name="state"
            value={doctorData.address.state}
            onChange={handleAddressChange}
            className="form-input block w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="text-gray-600">District:</label>
          <input
            type="text"
            name="district"
            value={doctorData.address.district}
            onChange={handleAddressChange}
            className="form-input block w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="text-gray-600">Street:</label>
          <input
            type="text"
            name="street"
            value={doctorData.address.street}
            onChange={handleAddressChange}
            className="form-input block w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="text-gray-600">Building:</label>
          <input
            type="text"
            name="building"
            value={doctorData.address.building}
            onChange={handleAddressChange}
            className="form-input block w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="text-gray-600">Room:</label>
          <input
            type="text"
            name="room"
            value={doctorData.address.room}
            onChange={handleAddressChange}
            className="form-input block w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="text-gray-600">Latitude:</label>
          <input
            type="text"
            name="latitude"
            value={doctorData.address.latitude}
            onChange={handleAddressChange}
            className="form-input block w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="text-gray-600">Longitude:</label>
          <input
            type="text"
            name="longitude"
            value={doctorData.address.longitude}
            onChange={handleAddressChange}
            className="form-input block w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
      >
        Add Doctor
      </button>
    </form>
  </div>
  )
}


//  const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const formData = new FormData();
//     formData.append('doctor_name', doctorData.doctor_name);
//     formData.append('doctor_image', doctorData.doctor_image);
//     formData.append('email', doctorData.email);
//     formData.append('password', doctorData.password);
//     formData.append('department', doctorData.department);
//     formData.append('qualification', doctorData.qualification);
//     formData.append('phone', doctorData.phone);
//     formData.append('fee', doctorData.fee);
//     formData.append('more_details', doctorData.more_details);
//     formData.append('address[state]', doctorData.address.state);
//     formData.append('address[district]', doctorData.address.district);
//     formData.append('address[street]', doctorData.address.street);
//     formData.append('address[building]', doctorData.address.building);
//     formData.append('address[room]', doctorData.address.room);
//     formData.append('address[latitude]', doctorData.address.lattitude);
//     formData.append('address[longitude]', doctorData.address.longitude);
//     console.log(formData,'form')
//     const response = await axios.post('http://localhost:8000/doctor/register/', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     console.log(response.data); // Handle the response as needed
//   } catch (error) {
//     console.error(error);
//   }
// };
// console.log('form data',formData)
