
import jwt_decode from 'jwt-decode'
import {server} from '../server'
import axios from 'axios';

export default async function login(e){
  

  let response =await fetch(`${server}/api/token/`,{
    method: 'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body : JSON.stringify({'email':e.target.email.value,'password':e.target.password.value}),
  })

  let data =await response.json()
  // console.log('data',data);
  console.log(response,"from log in")
  if (response.status==200){
    localStorage.setItem('authToken',JSON.stringify(data))
    const fg=localStorage.getItem('authToken')
    console.log(fg,'gy')
    
    return response;
    
  }
  else{
    console.log('invalid')
  }
}

export function getLocal(){
  let response = localStorage.getItem('authToken');
  return response;
}
export function getAccessToken() {
  let response = localStorage.getItem('authToken');
  if (response) {
    // Parse the JSON data from the localStorage
    const data = JSON.parse(response);
    // Extract and return the "access" token
    return data.access;
  }
  return null; // Return null if no authToken is found in localStorage
}



export async function getAccess() {
  let response = localStorage.getItem('authToken');
  if (response) {
    // Parse the JSON data from the localStorage
    const data = JSON.parse(response);
    // Extract the "access" token and expiration time from the data
    const accessToken = data.access;
    const payload = accessToken.split('.')[1];
    const decodedPayload = JSON.parse(atob(payload));
    const expirationTime = new Date(decodedPayload.exp * 1000);
    const currentTime = new Date();

    // Check if the access token has not expired
    if (expirationTime > currentTime) {
      return accessToken;
    } else {
      // Access token has expired, handle token refresh
      try {
        // Use the "refresh" token to get a new "access" token
        const refreshResponse = await axios.post(`${server}/api/token/refresh/`, {
          refresh: data.refresh,
        });

        // Update the access token in localStorage with the new token data
        const newAccessToken = refreshResponse.data.access;
        const newPayload = newAccessToken.split('.')[1];
        const newDecodedPayload = JSON.parse(atob(newPayload));
        const newExpirationTime = new Date(newDecodedPayload.exp * 1000);
        const newTokenData = {
          access: newAccessToken,
          refresh: data.refresh, // Keep the existing refresh token
          exp: newExpirationTime.getTime() / 1000, // Convert expiration time to seconds
        };

        localStorage.setItem('authToken', JSON.stringify(newTokenData));
        return newAccessToken;
      } catch (error) {
        // Handle the error, e.g., log out the user or display an error message
        console.error('Error refreshing access token:', error);
        return null;
      }
    }
  }

  return null; // Return null if no authToken is found in localStorage
}

export const get_user_data=()=>{
  const token=getAccessToken()
  const decode=jwt_decode(token)
  return decode
}






