import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {fetchAddressById} from '../../Services/UserService'


export const EditAddress = (props) => {
const navigate=useNavigate()
const [isModalOpen, setIsModalOpen] = useState(false);
const { addressId } = props;
const[address,setAddress]=useState({});
const[loading,setLoading]=useState(true)
const[addressFormData,setAddressFormData]=useState({
  state:'',
  district:'',
  street:'',
  building:'',
  room:''
})
// useEffect(()=>{
//   const fetchAddressData=async()=>{
//     try{
//       const response=await axios.get(`http://localhost:8000/doctor/address_edit/${addressId}/`);
//       setAddress(response.data);
      
//       setLoading(false)
//     }catch(error){
//       console.error('error fetching address data:',error)
//     }
//   }
//   fetchAddressData();
// },[addressId])

useEffect(()=>{
  const fetchData = async ()=>{
    const data = await fetchAddressById(addressId)
    if (data){
      setAddress(data)
      setLoading(false)
    }
  }
  fetchData()
},[addressId])


useEffect(()=>{
  setAddressFormData({
    state : address.state || '',
    district: address.district ||'',
    street : address.street || '',
    building : address.building || '',
    room: address.room || ''
  })
},[address]);

const handleAddressChange=(e)=>{
  const {name,value}=e.target;
  setAddressFormData({
    ...addressFormData,
    [name]:value,
  })
}

const handleAddressSubmit = async(e)=>{
  e.preventDefault();
  const formPayload =new FormData();
  formPayload.append('state',addressFormData.state);
  formPayload.append('district',addressFormData.district);
  formPayload.append('street',addressFormData.street);
  formPayload.append('building',addressFormData.building);
  formPayload.append('room',addressFormData.room);

  try{
    await axios.patch(`http://localhost:8000/doctor/address_edit/${addressId}/`,formPayload,{
      headers :{
        'Content-Type':'application/x-www-form-urlencoded',
      }
    });
    toast.success('updated')
   
  }catch (error){
    console.error('error updading address data:',error)
  }

};
if (loading){
  return <div>loading...</div>
}



  
  
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  

  

  return (
    <>
    {/* Modal toggle */}
    <button
      onClick={toggleModal}
      data-modal-target="authentication-modal"
      data-modal-toggle="authentication-modal"
      className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm my-5 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
     Edit Address
    </button>

    {/* Main modal */}
    {isModalOpen && (
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className=" my-32 mx-96 relative w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={toggleModal}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
       
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 mx-32 text-xl font-medium text-gray-900 dark:text-white">
                Edit Address
              </h3>
              <form className="space-y-6" onSubmit={handleAddressSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="state"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={addressFormData.state}
                    onChange={handleAddressChange}

                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter your state"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="district"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    District
                  </label>
                  <input
                    type="text"
                    name="district"
                    id="district"
                    value={addressFormData.district}
                    onChange={handleAddressChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter your district"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="street"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Street
                  </label>
                  <input
                    type="text"
                    name="street"
                    id="street"
                    value={addressFormData.street}
                    onChange={handleAddressChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter your street"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="building"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Building
                  </label>
                  <input
                    type="text"
                    name="building"
                    id="building"
                    value={addressFormData.building}
                    onChange={handleAddressChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter your building"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="room"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Room
                  </label>
                  <input
                    type="text"
                    name="room"
                    id="room"
                    value={addressFormData.room}
                    onChange={handleAddressChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter your room"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between">
              
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                edit
              </button>
  
              </form>

            </div>
          </div>
        </div>
      </div>
    )}
  </>
  )
}
