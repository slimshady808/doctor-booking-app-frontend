import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export const Department = () => {
    const [depertmentList,setDepartmentList]= useState([])


    useEffect(()=>{
      async function getDepartments(){
        const response =await axios.get('http://localhost:8000/doctor/departments/')
        console.log(response.data)
        setDepartmentList(response.data)
        
      }
      getDepartments();
    },[])
  return (
   <div className="container">
   
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

            {depertmentList.map((department)=>{
              const imageUrl = `http://localhost:8000${department.picture}`;


              return(

                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
              <img
                src={imageUrl}
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <a
                    href="/"
                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title="traveling"
                  >
                    
                  </a>
                 
                </p>
                <a
                  href="/"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  {department.name}
                </a>
                <p className="mb-2 text-gray-700">
                  {department.description}
                </p>
                <p>{department.id}</p>
                <p className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >  <Link to={`/doctor_list/${department.id}`} className="font-medium text-primary-600 hover:underline dark:text-primary-500">book now </Link>

                </p>
              </div>
            </div>


              )

            })}

            

           
          </div>
        </div>

        </div>
      );
    };