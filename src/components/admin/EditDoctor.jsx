import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import {toast} from 'react-hot-toast'
import { EditAddress } from './EditAddress';


export const EditDoctor = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate()
  const [doctor, setDoctor] = useState({});
  const [loading, setLoading] = useState(true);
  const[addressId,setAddress]=useState('')
  const [doctorFormData, setDoctorFormData] = useState({
    doctor_name: '',
    email: '',
    phone: '',
    fee: '',
    more_details: '',
    image:'',
    
  });
  const [imgUrl, setImgUrl] = useState('');
  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/doctor/doctor/${doctorId}/`);
        setDoctor(response.data);
        setLoading(false);
        setImgUrl(response.data.doctor_image)
        setAddress(response.data.address)
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchDoctorData();
  }, [doctorId]);

  useEffect(() => {
    setDoctorFormData({
      doctor_name: doctor.doctor_name || '',
      email: doctor.email || '',
      phone: doctor.phone || '',
      fee: doctor.fee || '',
      more_details: doctor.more_details || '',
      doctor_image: imgUrl, 
      
    });
  }, [doctor]);

  const handleDoctorChange = (e) => {
    const { name, value } = e.target;
    setDoctorFormData({
      ...doctorFormData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setDoctorFormData({
      ...doctorFormData,
      image: e.target.files[0],
    });
    setImgUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleDoctorSubmit = async (e) => {
    e.preventDefault();
    const formPayload = new FormData();
    formPayload.append('doctor_name', doctorFormData.doctor_name);
    formPayload.append('email', doctorFormData.email);
    formPayload.append('phone', doctorFormData.phone);
    formPayload.append('fee', doctorFormData.fee);
    formPayload.append('more_details', doctorFormData.more_details);
    if (doctorFormData.image) {
      formPayload.append('doctor_image', doctorFormData.image);
    }

    try {
      await axios.patch(`http://localhost:8000/doctor/doctor/${doctorId}/`, formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Updated')
      // navigate('/doctor_management')
      
    } catch (error) {
      console.error('Error updating doctor details:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-6">
     <Toaster position='top-center' reverseOrder='false' ></Toaster>
      <h2 className="text-2xl font-semibold mb-4">Edit Doctor Details</h2>
      <div className="shadow border p-6 rounded-md">
        <form onSubmit={handleDoctorSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-gray-600" htmlFor="doctor_name">
                Doctor Name
              </label>
              <input
                type="text"
                id="doctor_name"
                name="doctor_name"
                value={doctorFormData.doctor_name}
                onChange={handleDoctorChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-600" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={doctorFormData.email}
                onChange={handleDoctorChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-600" htmlFor="phone">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={doctorFormData.phone}
                onChange={handleDoctorChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-600" htmlFor="fee">
                Fee
              </label>
              <input
                type="number"
                id="fee"
                name="fee"
                value={doctorFormData.fee}
                onChange={handleDoctorChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
           

              <div className="md:col-span-2">
    <label className="block mb-2 text-gray-600" htmlFor="doctor_image">
      Doctor Image
    </label>
    <input
      type="file"
      id="doctor_image"
      name="doctor_image"
      onChange={handleImageChange}
      accept="image/*"
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
    />
    {imgUrl ? ( // Use imgUrl for conditional rendering
      <img
        src={imgUrl} // Display the preview image from imgUrl
        alt={doctor.doctor_name}
        className="w-24 h-24 mt-2 rounded-md object-cover"
      />
    ) : doctor.doctor_image ? ( // Display the existing doctor image if imgUrl is empty
      <img
        src={doctor.doctor_image}
        alt={doctor.doctor_name}
        className="w-24 h-24 mt-2 rounded-md object-cover"
      />
    ) : null}
              </div>




            <div className="md:col-span-2">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Save Doctor Details
              </button>
            </div>
           
          </div>
        </form>
        {addressId}
        <EditAddress addressId={addressId}/>
        
      </div>
    </div>
  );
};














// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom'
// export const EditDoctor = () => {
//   const { doctorId } = useParams();

//   const [doctor, setDoctor] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [doctorFormData, setDoctorFormData] = useState({
//     doctor_name: '',
//     email: '',
//     phone: '',
//     fee: '',
//     more_details: '',
//     image: null,
//   });

//   const [addressFormData, setAddressFormData] = useState({
//     state: '',
//     district: '',
//     street: '',
//     building: '',
//     room: '',
//   });

//   useEffect(() => {
//     const fetchDoctorData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/doctor/doctor/${doctorId}/`);
//         setDoctor(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching doctor data:', error);
//       }
//     };

//     fetchDoctorData();
//   }, [doctorId]);

//   useEffect(() => {
//     setDoctorFormData({
//       doctor_name: doctor.doctor_name || '',
//       email: doctor.email || '',
//       phone: doctor.phone || '',
//       fee: doctor.fee || '',
//       more_details: doctor.more_details || '',
//       image: null,
//     });
//   }, [doctor]);

//   useEffect(() => {
//     setAddressFormData({
//       state: doctor.address ? doctor.address.state : '',
//       district: doctor.address ? doctor.address.district : '',
//       street: doctor.address ? doctor.address.street : '',
//       building: doctor.address ? doctor.address.building : '',
//       room: doctor.address ? doctor.address.room : '',
//     });
//   }, [doctor]);

//   const handleDoctorChange = (e) => {
//     const { name, value } = e.target;
//     setDoctorFormData({
//       ...doctorFormData,
//       [name]: value,
//     });
//   };

//   const handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     setAddressFormData({
//       ...addressFormData,
//       [name]: value,
//     });
//   };

//   const handleImageChange = (e) => {
//     setDoctorFormData({
//       ...doctorFormData,
//       image: e.target.files[0],
//     });
//   };

//   const handleDoctorSubmit = async (e) => {
//     e.preventDefault();
//     const formPayload = new FormData();
//     formPayload.append('doctor_name', doctorFormData.doctor_name);
//     formPayload.append('email', doctorFormData.email);
//     formPayload.append('phone', doctorFormData.phone);
//     formPayload.append('fee', doctorFormData.fee);
//     formPayload.append('more_details', doctorFormData.more_details);
//     if (doctorFormData.image) {
//       formPayload.append('doctor_image', doctorFormData.image);
//     }

//     try {
//       await axios.patch(`http://localhost:8000/doctor/doctor/${doctorId}/`, formPayload, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Doctor details updated successfully!');
//     } catch (error) {
//       console.error('Error updating doctor details:', error);
//     }
//   };

//   const handleAddressSubmit = async (e) => {
//     e.preventDefault();
//     const formPayload = {
//       state: addressFormData.state,
//       district: addressFormData.district,
//       street: addressFormData.street,
//       building: addressFormData.building,
//       room: addressFormData.room,
//     };

//     try {
//       await axios.patch(`http://localhost:8000/doctor/address_edit/${address.id}/`, formPayload);
//       alert('Address details updated successfully!');
//     } catch (error) {
//       console.error('Error updating address details:', error);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto py-6">
//       <h2 className="text-2xl font-semibold mb-4">Edit Doctor Details</h2>
//       {/* Section for viewing and editing doctor details */}
//       <form onSubmit={handleDoctorSubmit}>
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//           <div>
//             <label className="block mb-2 text-gray-600" htmlFor="doctor_name">
//               Doctor Name
//             </label>
//             <input
//               type="text"
//               id="doctor_name"
//               name="doctor_name"
//               value={doctorFormData.doctor_name}
//               onChange={handleDoctorChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-2 text-gray-600" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={doctorFormData.email}
//               onChange={handleDoctorChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-2 text-gray-600" htmlFor="phone">
//               Phone
//             </label>
//             <input
//               type="text"
//               id="phone"
//               name="phone"
//               value={doctorFormData.phone}
//               onChange={handleDoctorChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-2 text-gray-600" htmlFor="fee">
//               Fee
//             </label>
//             <input
//               type="number"
//               id="fee"
//               name="fee"
//               value={doctorFormData.fee}
//               onChange={handleDoctorChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               required
//             />
//           </div>
//           <div className="md:col-span-2">
//             <label className="block mb-2 text-gray-600" htmlFor="more_details">
//               More Details
//             </label>
//             <textarea
//               id="more_details"
//               name="more_details"
//               value={doctorFormData.more_details}
//               onChange={handleDoctorChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               rows="4"
//             />
//           </div>
//           <div className="md:col-span-2">
//             <label className="block mb-2 text-gray-600" htmlFor="doctor_image">
//               Doctor Image
//             </label>
//             <input
//               type="file"
//               id="doctor_image"
//               name="doctor_image"
//               onChange={handleImageChange}
//               accept="image/*"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
//             />
//             {doctor.doctor_image && (
//               <img
//                 src={doctor.doctor_image}
//                 alt={doctor.doctor_name}
//                 className="w-24 h-24 mt-2 rounded-md object-cover"
//               />
//             )}
//           </div>
//           <div className="md:col-span-2">
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
//               Save Doctor Details
//             </button>
//           </div>
//         </div>
//       </form>

//       {/* Section for viewing and editing address details */}
//       <form onSubmit={handleAddressSubmit}>
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-8">
//           <div>
//             <label className="block mb-2 text-gray-600" htmlFor="state">
//               State
//             </label>
//             <input
//               type="text"
//               id="state"
//               name="state"
//               value={addressFormData.state}
//               onChange={handleAddressChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-2 text-gray-600" htmlFor="district">
//               District
//             </label>
//             <input
//               type="text"
//               id="district"
//               name="district"
//               value={addressFormData.district}
//               onChange={handleAddressChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               required
//             />
//           </div>
//           <div className="md:col-span-2">
//             <label className="block mb-2 text-gray-600" htmlFor="street">
//               Street
//             </label>
//             <input
//               type="text"
//               id="street"
//               name="street"
//               value={addressFormData.street}
//               onChange={handleAddressChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               required
//             />
//           </div>
//           <div className="md:col-span-2">
//             <label className="block mb-2 text-gray-600" htmlFor="building">
//               Building
//             </label>
//             <input
//               type="text"
//               id="building"
//               name="building"
//               value={addressFormData.building}
//               onChange={handleAddressChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               required
//             />
//           </div>
//           <div className="md:col-span-2">
//             <label className="block mb-2 text-gray-600" htmlFor="room">
//               Room
//             </label>
//             <input
//               type="text"
//               id="room"
//               name="room"
//               value={addressFormData.room}
//               onChange={handleAddressChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               required
//             />
//           </div>
//           <div className="md:col-span-2">
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
//               Save Address Details
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };






















