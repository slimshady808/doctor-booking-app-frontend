import { useState } from 'react'
import { HomePage } from './pages/User/HomePage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import {SignUp} from './pages/SignUp'
import {LoginPage} from './pages/LoginPage'
import { OTP } from './components/user/OTP';
import { ResetPasswordPage } from './pages/Doctor/ResetPasswordPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { ResetPasswordNew } from './components/user/ResetPasswordNew';

import {AdminRoutes} from './Routes/AdminRoutes'
import { PrivateRoute } from './utils/PrivateRoute';
import { DoctorRoutes } from './Routes/DoctorRoutes';
import { UserRoutes } from './Routes/UserRoutes';
function App() {


  return (
      <>
<Router>
    <Routes>
    <Route path='/' exact element={<PrivateRoute/>}>
            <Route exact path='/' element={<HomePage />} />
    </Route>
    
    <Route Component={SignUp} path='/signup'/>
    <Route Component={LoginPage} path='/login'/>
    <Route Component={OTP} path='/otp'/>
    <Route Component={ForgotPasswordPage} path='/forgot/password'/>
    <Route Component={ResetPasswordNew} path="/reset-password/:uidb64/:token/" />
    <Route Component={ResetPasswordPage} path='/reset-password' />

    <Route path="/admin/*" element={ <AdminRoutes /> } />
    <Route path="/doctor/*" element={<DoctorRoutes/>} />
    <Route path="/user/*" element={<UserRoutes/>} />
 

   


    </Routes>
 </Router>






      </>
     );
    };
       
     

export default App
