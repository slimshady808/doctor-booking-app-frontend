import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import {getLocal,getAccess,getAccessToken}  from '../../helpers/auth'
import jwt_decode from 'jwt-decode'
import {fetchAvailableDates,fetchAvailableSlots,fetchPatients,createPatient,createBooking} from '../../Services/UserService'
import {Toaster} from 'react-hot-toast'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {server} from '../../server'

export const BookingModal = (props) => {
const navigate=useNavigate()
const {doctorId}=props
const amount = props.amount
const [isModalOpen, setIsModalOpen] = useState(false);
const [userId,setUserId]=useState('')
const [availableDate,setAvailableDate]=useState([])
const [selectedDate, setSelectedDate] = useState(null);
const [availableSlots, setAvailableSlots] = useState([]);
const [patients,setPatients]= useState([])
const [slotid,setSlot]=useState('')
const [patientId,setPatientId]=useState(null)
const [newPatientName, setNewPatientName] = useState('');
const [newPatientMobile, setNewPatientMobile] = useState('');
const [newPatientAge, setNewPatientAge] = useState('');
const [newPatientPlace, setNewPatientPlace] = useState('');
const [booking,setBooking] =useState('')
const [fees,setFees] = useState('')
const [name,setName]=useState('')




const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };


  useEffect(() => {
    if (isModalOpen) {
      const fetchUserData = async () => {
        const token = getAccessToken();
        const user = jwt_decode(token);
        console.log('Fetched user:', user);
        setUserId(user.user_id);
        setName(user.username)
      };
      fetchUserData();
    }
  }, [isModalOpen]);
  
  console.log('Outside first useEffect:', userId);
  
  useEffect(() => {
    console.log('Inside second useEffect - fetching patients');
    const fetchData = async () => {
      const data = await fetchPatients(userId);
      if (data) {
        setPatients(data);
        console.log('Fetched patients:', data);
      }
    };
    fetchData();
  }, [userId]);

 





  useEffect(()=>{
    const fetchData = async ()=>{
      const data= await fetchAvailableDates(doctorId)
  if (data){
      setAvailableDate(data)
    
      
   }
   }
    fetchData()
  },[])







const handleDateClick = async (date)=>{
  console.log('clicked',date)
  setSelectedDate(date)
  console.log(date)
  const slotsData = await fetchAvailableSlots(doctorId,date);
  if (slotsData){

    setAvailableSlots(slotsData)
    console.log(availableSlots)
    
  }
};


const handleSlotClick = async (slot)=>{
  console.log(slot)

  setSlot(slot)
  
}



const handlePatientChange =(event)=>{
  const selectedPatientId = event.target.value;
  setPatientId(selectedPatientId)
};

const handlePaymentSuccess = async (response)=>{
  try{
    let bodyData =new FormData();

    bodyData.append("response", JSON.stringify(response));
    await axios({
      url :`${server}/booking/payment/success/`,
      method : "POST",
      data : bodyData,
      headers:{
        Accept : "application/json",
       "Content-Type": "application/json",
      },
    })
    .then((res)=>{
      console.log("everything is OK")
      const successUrl = `/success?slotid=${encodeURIComponent(slotid)}`;
      navigate(successUrl);
      // navigate('/success/')
      setBooking("")
      setFees("")
      
    })
    .catch((err)=>{
      console.log(err);
    });
  }catch(error){
    console.log(console.error())
  }
};

// this will load a script tag which will open up Razorpay payment card to make //transactions
const loadScript=()=>{
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  document.body.appendChild(script);
};



const showRazorpay = async (idpass) => {
  console.log('enter to show razor pay')
  const res = await loadScript();
  
  let bodyData = new FormData();

  bodyData.append("amount",amount.toString());
  bodyData.append("booking",idpass);
  
  
  const data = await axios ({
    url :`${server}/booking/pay/`,
    method:"POST",
    headers:{
      Accept :"application/json",
      "Content-Type": "application/json",
    },
    data:bodyData,
  }).then((res)=>{
    return res;
  });
  // in data we will receive an object from the backend with the information about the payment
  //that has been made by the user
  var options ={
    key_id: import.meta.env.VITE_REACT_APP_PUBLIC_KEY, // Access the environment variable directly
    key_secret: import.meta.env.VITE_REACT_APP_SECRET_KEY,
    amount: data.data.payment.amount,
    currency: "INR",
    name: name,
    description: "Test teansaction",
    image: "", // add image url
    order_id: data.data.payment.id,
    handler: function (response) {
    // we will handle success by calling handlePaymentSuccess method and
    // will pass the response that we've got from razorpay
    handlePaymentSuccess(response);
  },
  prefill: {
    name: "User's name",
    email: "User's email",
    contact: "User's phone",
  },
  notes: {
    address: "Razorpay Corporate Office",
  },
  theme: {
    color: "#3399cc",
  },
};
console.log('windw opened')
var rzp1 = new window.Razorpay(options);
    rzp1.open();
};
  




const handleBookNow = async ()=>{
  if (!selectedDate || !slotid){
    toast.error('please select a date and slot before booking')
    return
  }
  let bookingData={
    slot:slotid,
    doctor:doctorId,
    date_of_booking: new Date().toISOString().split('T')[0] 
  }
  if (patientId){
    // use an existing patient
    bookingData.patient_id=patientId
  }else{
    //create a new patient
   try{
    const newPatientData={
      user:userId,
      name:newPatientName,
      mobile_number: newPatientMobile,
      age:newPatientAge,
      place:newPatientPlace,
    };
    const newPatientId = await createPatient(newPatientData);
    if (newPatientId){
      console.log('new patient created with id',newPatientId)
      bookingData.patient_id=newPatientId;
    }else{
      toast.error('error for creating new patient 1')
      return
    }
   }catch(error){
    toast.error('error creating new patient 2',error)
    return
   }
  }
  try{
   
    const bookingId = await createBooking(bookingData)
     
   if (bookingId){
    // toast.success('booking success',bookingId)
    console.log('booking created with id ',bookingId)
    setBooking(bookingId)
    setFees(amount)
    // console.log('booooking',bookingId)
    showRazorpay(bookingId)
   }else{
    toast.error('error for for booking');
    console.log('booking failed')
   }
    // navigate('/success')
  }catch(error){
    //Handle the error 
    toast.error('error for for booking',error);
    console.log('booking failed')
  }
}


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
     Book Here
    </button>

    {/* Main modal */}
    {isModalOpen && (
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="  my-24 mx-96  relative w-full max-w-md max-h-full">
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
          <Toaster position='top-center' reverseOrder='false' ></Toaster>
            <h3 className="mb-4 mx-32 text-xl font-medium text-gray-900 dark:text-white">
              Booking page
             
            </h3>
            <div className="flex flex-col">
            <div className="flex mx-2 flex-row justify-center">
              
              {availableDate.map((date,index)=>(
                <div 
                key={index}
                className={`px-3 py-2 mb-1 rounded-full cursor-pointer ${
                      selectedDate === date
                        ? ' text-white bg-gradient-to-tr from-green-600 to-green-300'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                    onClick={() => handleDateClick(date)}
                  >
                {date}
                </div>
              ))}
             
            
         
            </div>
            <div className="flex mx-2 flex-row justify-center">
              {/* Display available slots in small boxes */}
              {availableSlots.map((slot) => (
                <div
                      key={slot.id}
                      className={`px-3 py-2 rounded-full cursor-pointer ${
                        slotid === slot.id
                          ? ' text-white bg-gradient-to-tr from-sky-600 to-sky-300'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                      onClick={() => handleSlotClick(slot.id)}
                    >
                    {slot.time}
                  </div>
                ))}
              
             
              {/* Add more slot boxes here */}
            </div>
          </div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Patient's name"
                    value={newPatientName}
                    onChange={(e)=>setNewPatientName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    value={newPatientMobile}
                    onChange={(e)=>setNewPatientMobile(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Patient's mobile number"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Age
                  </label>
                  <input
                    type="text"
                    name="age"
                    id="age"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Patient's Age"
                    value={newPatientAge}
                    onChange={(e)=>setNewPatientAge(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="place"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Place
                  </label>
                  <input
                    type="text"
                    name="place"
                    id="place"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Patient's place"
                    value={newPatientPlace}
                    onChange={(e)=>setNewPatientPlace(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between">
                {/* Add buttons or other elements here */}
              </div>

              <div className="mt-8">
                  {/* List of patients linked to the user */}
                  <h4 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    Patients Linked to the User
                  </h4>
                  <select
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    onChange={handlePatientChange}
                  >
                   <option value="">Select a patient</option>
                    {patients.map((patient) => (
                      <option key={patient.id} value={patient.id}>
                        {patient.name}
                      </option>
                    ))}
                  </select>
                </div>
              <button
              type="button"
                onClick={handleBookNow}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Book Now
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
