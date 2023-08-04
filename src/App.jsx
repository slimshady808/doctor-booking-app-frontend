import { useState } from 'react'
import { HomePage } from './pages/HomePage';
import { DoctorListpage } from './pages/DoctorListpage';
import {LoginPage} from './pages/LoginPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {SignUp} from './pages/SignUp'

import { PrivateRoute } from './utils/PrivateRoute';
import { DoctorLogin } from './pages/Doctor/DoctorLogin';
import { DoctorHomepage } from './pages/Doctor/DoctorHomepage';
import { DoctorsFullPage } from './pages/DoctorsFullPage';
import { DoctorManagementPage } from './pages/Admin/DoctorManagementPage';
import { DoctorEditPage } from './pages/Admin/DoctorEditPage';
import { EditAddress } from './components/admin/EditAddress';
import { AddDoctorPage } from './pages/Admin/AddDoctorPage';
import { DoctorDetailPage } from './pages/DoctorDetailPage';
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
    <Route Component={DoctorListpage} path='/doctor_list/:departmentId/'/>
    <Route Component={DoctorsFullPage} path='/doctor_full_list'/>
    <Route Component={DoctorDetailPage} path='/doctor_details/:doctorId'/>


    <Route Component={DoctorLogin} path='/doctor_login'/>
    <Route Component={DoctorHomepage} path='/doctor_home'/>
    {/* <Route Component={DoctorHomepage} path='/doctor_home'/> */}
    
    <Route Component={DoctorManagementPage} path='/doctor_management'/>
    <Route Component={DoctorEditPage} path='/doctor_edit/:doctorId'/>
    {/* <Route path="/edit-address/:addressId" component={EditAddress} /> */}
    <Route Component={AddDoctorPage} path='/add_doctor'/>

   


    </Routes>
 </Router>






      </>
     );
    };
       
     

export default App
