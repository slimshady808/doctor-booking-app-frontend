import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import {toast} from 'react-hot-toast'
import {createUser} from '../../src/Services/UserService'

export const SignUp = () => {
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword,setShowConfirmPassword]=useState(false)
const [username,setUsername]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [confirmPassword,setConfirmPassword]=useState('')
const [usernameError, setUsernameError] = useState('');
const [loading, setLoading] = useState(false);
const navigate=useNavigate()


const handleSubmit = async()=>{

  if (! username || ! email || !password || !confirmPassword  || loading){
    toast.error('please fill all fields')
    return
  }
  if (password !== confirmPassword){
    toast.error('passwords not matching')
    return
  }
  setLoading(true); 
  const newUserData={
    username,
    email,
    password
  
    
  };
  const response=await createUser(newUserData);
  console.log(response,'errrr')
  if (response.status===200){
    const otpUrl=`/otp?email=${encodeURIComponent(email)}`;
    navigate(otpUrl)

    toast.success('account created')
    
    
  }else{
    
    toast.error('email already exists')
    setEmail('')
  }
 
  setLoading(false); 
}

const toggleShowPassword = () => {
  setShowPassword(!showPassword);
};


  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-600 py-12 px-4 sm:px-6 lg:px-8">
    <Toaster position='top-center' reverseOrder='false' ></Toaster>
    <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
        Create a new account
      </h2>
      <form className="space-y-4" >
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            id="username"
            name="username"
            type="username"
            autoComplete="username"
            onChange={e => setUsername(e.target.value)}
            required
            className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
            required
            className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
            placeholder="Enter your email"
          />
        </div>
        <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <div className="relative">
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          onChange={e => setPassword(e.target.value)}
          required
          className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm pr-10"
          placeholder="Enter your password"
        
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
          onClick={toggleShowPassword}
        >
          {showPassword ? (
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.536 8.464a9 9 0 111.414 1.414l2.83-2.83a1 1 0 111.414 1.414l-2.83 2.83a9 9 0 11-1.414-1.414l2.83-2.83a1 1 0 111.414-1.414l-2.83 2.83z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l2 2"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7.7 7.7a6 6 0 018.6 8.6M4 19l.85-2.14a6 6 0 009.3-9.3L19 4"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        confirm Password
      </label>
      <div className="relative">
        <input
          id="confirmPassword"
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          autoComplete="current-password"
          onChange={e => setConfirmPassword(e.target.value)}
          required
          className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm pr-10"
          placeholder="confirm password"
        
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
          onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? (
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.536 8.464a9 9 0 111.414 1.414l2.83-2.83a1 1 0 111.414 1.414l-2.83 2.83a9 9 0 11-1.414-1.414l2.83-2.83a1 1 0 111.414-1.414l-2.83 2.83z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l2 2"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7.7 7.7a6 6 0 018.6 8.6M4 19l.85-2.14a6 6 0 009.3-9.3L19 4"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
       
        <div className="flex items-center justify-between">
  <div className="text-sm">
    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
    <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Already have an account</Link>
    </a>
  </div>
 
  </div>
  
        <div>
          {/* <button
            type="button"
            onClick={handleSubmit}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button> */}

          <button
  type="button"
  onClick={handleSubmit}
  disabled={loading}
  className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
    loading
      ? 'bg-gray-400 cursor-not-allowed'
      : 'bg-indigo-600 hover:bg-indigo-700'
  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
>
  {loading ? (
    <>
      <span className="animate-spin h-5 w-5 mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {/* Add a spinner icon here */}
        </svg>
      </span>
      Loading
    </>
  ) : (
    'Sign Up'
  )}
</button>





        </div>
      </form>
    </div>
  </div>

  )
}
