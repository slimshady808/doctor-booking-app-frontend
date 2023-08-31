import React from "react";
import { getLocal } from "../helpers/auth";
import jwt_decode from "jwt-decode";
import { HomePage } from "../pages/HomePage";

import { LoginPage } from "../pages/LoginPage";
import { AdminPage } from "../pages/Admin/AdminPage";
import { DoctorHomepage } from "../pages/Doctor/DoctorHomepage";


export const PrivateRoute = ({children,...rest}) => {
        const response= getLocal('authToken');

        if (response){
          const decoded = jwt_decode(response)

          if (decoded.role === "admin"){
            console.log('admin',decoded);
            return <AdminPage/>
          }
          else if (decoded.role === "user"){
              return <HomePage/>
          }
          else if(decoded.role ==="doctor"){
            return <DoctorHomepage/>
          }
          else{
            console.log('no token');
            return <LoginPage/>
          }
        }

 
}
