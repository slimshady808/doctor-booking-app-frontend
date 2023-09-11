import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import {BookingModal} from '../user/BookingModal'
import {fetchDoctorData,fetchDepartmentById,fetchQualificationById, fetchAddressById,fetchAvailableDates} from '../../Services/UserService'
import { BsMenuButton } from 'react-icons/bs';
import { toast } from 'react-hot-toast';
import { ReviewComponent } from './ReviewComponent';
import { get_user_data } from '../../helpers/auth';
export const DoctorDetails = () => {
  
  const { doctorId } = useParams();
  const [doctor,setDoctor] =useState({});
  const [loading, setLoading] = useState(true);
  const [addressId,setAddressId]=useState('');
  const [address,setAddress]=useState({})
  const [qualificationId,setQualificationId]=useState('')
  const [qualification,setQualification]=useState('')
  const [departmentId,setDepartmentId]=useState('')
  const [department,setDepartment]=useState('')
  const [availableDate,setAvailableDate]=useState([])
  const [amount,setAmount]=useState('')
  const [name,setName]=useState('')
  const[profileId,setProfileId]=useState('')
  const[user_id,setUserId] =useState('')
  
  const [imgUrl, setImgUrl] = useState('');

  useState(()=>{
    const data=get_user_data()
    setUserId(data.user_id)
  },[])

  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchDoctorData(doctorId);
      if (data) {
     
        setDoctor(data);
        setName(data.doctor_name)
        setAddressId(data.address);
        setImgUrl(data.doctor_image);
        setDepartmentId(data.doctor_department);
        setQualificationId(data.qualification);
        setAmount(data.fee)
        setProfileId(data.user_profile)
      }
      setLoading(false);
    };
    fetchData();
  }, []);  

useEffect(()=>{
  const fetchData = async ()=>{
    const data = await fetchDepartmentById(departmentId);
    if (data){
      setDepartment(data.name)
    }
  }
  fetchData()
},[departmentId])

useEffect(()=>{
  const fetchData = async ()=>{
    const data = await fetchQualificationById(qualificationId);
    if (data){
      setQualification(data.title)
    }
  }
  fetchData()
},[qualificationId])

useEffect(()=>{
  const fetchData = async ()=>{
    const data = await fetchAddressById(addressId)
    if (data){
      setAddress(data)
    }
  }
  fetchData()
},[addressId])

useEffect(()=>{
  const fetchData = async ()=>{
    const data= await fetchAvailableDates(doctorId)

  if (data){
    
    setAvailableDate(data)
   
  }
  
  }
  fetchData()
},[doctorId])

// console.log(availableDate,'last');


  if (loading) {
    return <div>Loading...</div>;
  }


  return (
<section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-12 mx-auto ">
    <div className="lg:flex lg:flex-wrap -mx-4">
      <div className="lg:w-1/2 px-4 mb-10 lg:mb-0">
        <img
          alt="Doctor"
          className="w-full h-full object-cover object-center rounded shadow-lg"
          src={imgUrl}
        />
      </div>
      <div className="lg:w-1/2 px-4 lg:pl-10">
        <h1 className="text-gray-900 text-3xl title-font font-medium capitalize mb-1">
          {doctor.doctor_name}
        </h1>
        <h2 className="text-xl title-font text-gray-500 tracking-widest mb-6">
          {department}
        </h2>
        <div className="mb-6">
          <p className="font-bold">Qualification:</p>
          <p>{qualification}</p>
        </div>
        <div className="mb-6">
          <p className="font-bold">Fees:</p>
          <p>${amount}</p>
        </div>
        <div className="mb-6">
          <p className="font-bold">Email:</p>
          <p>{doctor.email}</p>
        </div>
        <div className="mb-6">
          <p className="font-bold">Mobile Number:</p>
          <p>{doctor.phone}</p>
        </div>
        <div className="mb-6">
          <h1 className="not-italic font-bold text-lg">
            {availableDate.length > 0 ? 'Appointments Available' : ''}
          </h1>
          <div className="flex flex-wrap mt-1">
            {availableDate && availableDate.length > 0 ? (
              availableDate.map((date, index) => (
                <div
                  key={index}
                  className="px-2 py-1 bg-gray-200 rounded-md mb-2 mr-2"
                >
                  {date}
                </div>
              ))
            ) : (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
                <p>Dates not available</p>
              </div>
            )}
          </div>
        </div>
        <div className="mb-6">
          {availableDate.length > 0 ? (
            <BookingModal doctorId={doctorId} amount={amount} />
          ) : (
            <button
              className="block text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-300 mb-10"
              type="button"
            >
              Book Here
            </button>
          )}

          <Link
               
                to={`/user/chat/${user_id}/${profileId}`} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            >
                Start Chat 
            </Link>

           
        </div>
      </div>
    </div>
    <div className='flex '>
    <div className="mt-10 bg-white  rounded-lg w-1/2 shadow-lg  p-6  ">
      <h2 className="text-2xl font-semibold mb-4">Address</h2>
      <div className="text-black">
        <p>
          <span className="font-bold">State:</span> {address.state}
        </p>
        <p>
          <span className="font-bold">District:</span> {address.district}
        </p>
        <p>
          <span className="font-bold">Street:</span> {address.street}
        </p>
        <p>
          <span className="font-bold">Building:</span> {address.building}
        </p>
        <p>
          <span className="font-bold">Room:</span> {address.room}
        </p>
      </div>
     
    </div>
   <div className=' w-1/2 '>
   <ReviewComponent doctorId={doctorId}/>
   </div>
   </div>
  </div>
  
</section>



  )
}


