import React from "react";
import { getLocal } from "../helpers/auth";
import jwt_decode from "jwt-decode";
import { HomePage } from "../pages/HomePage";

import { LoginPage } from "../pages/LoginPage";
import { AdminPage } from "../pages/Admin/AdminPage";


export const PrivateRoute = ({children,...rest}) => {
        const response= getLocal('authToken');

        if (response){
          const decoded = jwt_decode(response)

          if (decoded.is_admin){
            console.log('admin',decoded);
            return <AdminPage/>
          }
          else if (!decoded.is_admin){
              return <HomePage/>
          }else{
            console.log('no token');
            return <LoginPage/>
          }
        }

 
}
