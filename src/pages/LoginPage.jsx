import React from 'react'
import login, { getLocal } from '../helpers/auth';
import {Link,useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import {Toaster} from 'react-hot-toast'
import {toast} from 'react-hot-toast'
// import {useSelector,useDispatch} from 'react-redux'
// import { updateAuthToken, updateUser } from '../redux/AuthContext';

export const LoginPage = () => {
  const history= useNavigate()
  // const {user,authToken}=useSelector((state)=>state.auth);
  // const dispatch=useDispatch();
  const response =getLocal();
  
  useEffect(()=>{
    if (response){
      history('/')
    }
  })



const handleSubmit = async (e) => {
 
  e.preventDefault();
  try{
    const response = await login(e);
    const decoded = jwt_decode(response.access);
    console.log('decoded',decoded)
    // dispatch(updateUser(decoded));
    console.log('tkn',response)
    // dispatch(updateAuthToken(response));
    history('/')
  }catch (error){
    toast.error('Invalid User Credential')
  }
};

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <Toaster position='top-center' reverseOrder='false' ></Toaster>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          DocLink
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                
              </p>

            </form>
            {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                are you a doctor? <Link to="/doctor_login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in </Link>
                
              </p> */}
          </div>
        </div>
      </div>
    </section>


  )
}
