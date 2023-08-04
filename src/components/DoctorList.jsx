import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom';

export const DoctorList = () => {
  const { departmentId } = useParams();
    const [doctors,setDoctors]=useState([])
    useEffect(()=>{
      async function getDoctors(){
        const response = await axios.get(`http://localhost:8000/doctor/doctors_by_department/${departmentId}/`)
        setDoctors(response.data)
      }
      getDoctors()
    },[departmentId])

    console.log(doctors)


  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Discover Our Team
        </p>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
      </div>
    
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
      {doctors.map((doctor) => {
               const imageUrl = `http://localhost:8000${doctor.doctor_image}`;
               return (

                <div key={doctor.id} className="bg-white rounded shadow">
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64 overflow-hidden">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={imageUrl}
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
              See more
            </Link>


        </div>
                
               );
             })}
        
       
       
      </div>
     
    </div>
  );
};










// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom';
// export const DoctorList = () => {
//   const { departmentId } = useParams();
//   const [doctors,setDoctors]=useState([])
//   useEffect(()=>{
//     async function getDoctors(){
//       const response = await axios.get(`http://localhost:8000/doctor/doctors_by_department/${departmentId}/`)
//       setDoctors(response.data)
//     }
//     getDoctors()
//   },[departmentId])

//  console.log(doctors)



//   return (
// <div className='px-6 py-4'>
//       <h1>{departmentId}</h1>
//       <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
//         <div className="container">
//           <div className="flex flex-wrap -mx-4">
//             <div className="w-full px-4">
//               <div className="mx-auto mb-[60px] max-w-[510px] text-center">
//                 <span className="block mb-2 text-lg font-semibold text-primary">
//                   {/* Our Doctors */}
//                 </span>
//                 <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
//                   Our Doctors
//                 </h2>
//                 <p className="text-base text-body-color">
//                   There are many variations of passages of Lorem Ipsum available
//                   but the majority have suffered alteration in some form.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-wrap justify-center -mx-4">
//             {/* One selected TeamCard */}
//             {doctors.map((doctor) => {
//               const imageUrl = `http://localhost:8000${doctor.doctor_image}`;
//               return (
//                 <TeamCard
//                   key={doctor.id} // Add a unique key for each doctor
//                   name={doctor.doctor_name}
//                   profession={doctor.department_name}
//                   fee="{doctor.fee}" // Assuming the 'fee' field is available in the API response
//                   imageSrc={imageUrl}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </div>
//   );

// }






// const TeamCard = ({ imageSrc, name, profession,fee }) => {
//   return (
//     <div className="w-full px-4 md:w-1/2 xl:w-1/4 bg-red">
//       <div className="mx-auto mb-10 w-full max-w-[370px]">
//         <div className="relative overflow-hidden rounded-lg">
//           <img src={imageSrc} alt="" className="w-full" />
//           <div className="absolute left-0 w-full text-center bottom-5">
//             <div className="relative px-3 py-5 mx-5 overflow-hidden bg-white rounded-lg">
//               <h3 className="text-base font-semibold text-dark">{name}</h3>
//               <p className="text-sm text-body-color">{profession}</p>
//               <div>
//                 <span className="absolute bottom-0 left-0">
//                   <svg
//                     width={61}
//                     height={30}
//                     viewBox="0 0 61 30"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <circle
//                       cx={16}
//                       cy={45}
//                       r={45}
//                       fill="#13C296"
//                       fillOpacity="0.11"
//                     />
//                   </svg>
//                 </span>
//                 <span className="absolute top-0 right-0">
//                   <svg
//                     width={20}
//                     height={25}
//                     viewBox="0 0 20 25"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     {/* SVG code for the circles, unchanged */}
//                   </svg>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };




