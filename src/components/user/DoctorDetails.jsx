import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {BookingModal} from '../user/BookingModal'
import {fetchDoctorData,fetchDepartmentById,fetchQualificationById, fetchAddressById,fetchAvailableDates} from '../../Services/UserService'
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

  
  
  const [imgUrl, setImgUrl] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchDoctorData(doctorId);
      if (data) {
        setDoctor(data);
        setAddressId(data.address);
        setImgUrl(data.doctor_image);
        setDepartmentId(data.doctor_department);
        setQualificationId(data.qualification);
      }
      setLoading(false);
    };
    fetchData();
  }, [doctorId]);  
console.log(doctor,'doc')
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

console.log(availableDate,'last');


  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <section className="text-gray-700 body-font overflow-hidden ">
    <div className="container px-5 py-24 mx-auto bg-white">
      <div className="lg:w-4/5  mx-auto flex flex-wrap ">
        <img
          alt="ecommerce"
          className="lg:w-2/6 h-86  object-cover object-center rounded border border-gray-200"
          src={imgUrl}
        />
        <div className="lg:w-4/6 h-25 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
      
        <h1 className="text-gray-900 text-3xl title-font font-medium  capitalize mb-1">{doctor.doctor_name}</h1>
          <h2 className="text-xl title-font text-gray-500 tracking-widest ">{department}</h2>
          
          
          <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
         
          

          <div className="  mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5  shadow-md p-6">

  <div className="text-black">
    <p className="font-bold">Qualification:</p>
    <p>{qualification}</p>
    <p className="font-bold">Fees:</p>
    <p>${doctor.fee}</p>
    <p className="font-bold">Email:</p>
    <p>{doctor.email}</p>
    <p className="font-bold">Mobile Number:</p>
    <p>{doctor.phone}</p>
  </div>
 
 
</div>
 <div>
  
  { availableDate.length>0?(<h1 className='not-italic font-bold text-lg'>Appointments Available</h1>):<h1 className='text-red-500'>sorry...</h1>}
 <div className='shadow-box flex' >
 {availableDate && availableDate.length > 0 ? (
        <div className='flex  ml-1'>
          {availableDate.map((date, index) => (
            <div key={index} className="px-2 py-1 bg-gray-200 rounded-md ml-1 mr-1">
              {date}
            </div>
          ))}
          </div>
      ) : (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 p-3 rounded-md">
          <p>Dates not available</p>
        </div>
      )}
      
 </div>
 <BookingModal doctorId={doctorId}/>
  </div>


 
  </div>

        <div className=' lg:w-2/6  rounded-lg shadow-md p-6'>

  <div className='text-black'>
    <p><span className="font-bold">State:</span> {address.state}</p>
    <p><span className="font-bold">District:</span> {address.district}</p>
    <p><span className="font-bold">Street:</span> {address.street}</p>
    <p><span className="font-bold">Building:</span> {address.building}</p>
    <p><span className="font-bold">Room:</span> {address.room}</p>
  </div>
</div>

      
      </div>
      
    </div>
   
  </section>

  )
}


