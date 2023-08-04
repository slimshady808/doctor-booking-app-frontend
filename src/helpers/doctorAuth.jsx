import React from 'react'
import { toast} from "react-hot-toast";
export default async function doctor_login(e){

    let response = await fetch("http://localhost:8000/doctor/login/",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body : JSON.stringify({'email':e.target.email.value,'password':e.target.password.value}),
    
    })

    let data = await response.json()
    console.log('data',data);

    if (response.status ==200){
      localStorage.setItem('authToken',JSON.stringify(data))
      toast.success('Login Success')
      return data
    }else{
      console.log('invalid')
    }


}

