import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {  Link } from 'react-router-dom';

export const AllDoctors = () => {
  const [doctors,setDoctors] =useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [sortBy, setSortBy] = useState('name');

  useEffect(()=>{
    fetchDoctorsData();
  },[searchQuery,selectedDepartment,sortBy]);

  const fetchDoctorsData = async()=>{
    try{
      const response = await axios.get('http://localhost:8000/doctor/doctors/',{
        params:{
          search :searchQuery,
          department_id:selectedDepartment,
          ordering : sortBy == 'fee' ? 'fee' : '-fee',
        },
      });
      setDoctors(response.data)
    }catch(error){
      console.error('error fetching doctors data:',error);
    }
  };

 console.log(doctors,'neeeeeeeeew')
  


  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className='grid gap-10 mx-12 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg'>
    {/* search field*/}

    <input
      type='text'
      placeholder='search doctors'
      value={searchQuery}
      onChange={(e)=>setSearchQuery(e.target.value)}
      className='mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
    />

    {/*filter drop down */}

    <select
    value={selectedDepartment}
    onChange={(e)=> setSelectedDepartment(e.target.value)}
    className='mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
    >
     <option value='' >all</option>
    <option value='2' >PEDIATRICS</option>
    <option value='1'>ENT</option>
    <option value='3'>CARDIOLOGY</option>

    </select>

    {/* sort fropdown */}

    <select
    value={sortBy}
    onChange={(e)=>setSortBy(e.target.value)}
    className='mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
    >
       <option value="fee">Low to high</option>
       <option value='fee-desc'>High to Low</option>


    </select>
    
</div>


    <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
    {doctors.map((doctor) => {
            
             return (

              <div key={doctor.id} className="bg-white rounded shadow">
        <div className="relative pb-56 mb-4 rounded shadow lg:pb-64 overflow-hidden">
          <img
            className="absolute object-cover w-full h-full rounded"
            src={doctor.doctor_image} 
            alt="Person"
          />
        </div>
        <div className="flex flex-col items-center p-4">
          <p className="text-lg font-bold">{doctor.doctor_name}</p>
          <p className="mb-2 text-xm text-gray-800">{doctor.department_name}</p>
          <p className="mb-2 text-xm text-gray-800">₹{doctor.fee}</p>

         
        </div>
        <Link
              to={`/doctor_details/${doctor.id}`} // Replace with your desired path
              className="inline-block px-6 py-2 mt-6 ml-16 mb-6 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Book Now
            </Link>


      </div>
              
             );
           })}
      
     
     
    </div>
   
  </div>

    );
}






