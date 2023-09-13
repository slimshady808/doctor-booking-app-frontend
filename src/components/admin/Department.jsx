import React, { useEffect, useState } from 'react';
import { fetchDepartment,deleteDepartment } from '../../Services/AdminService';
import { server } from '../../server';
import { FaTrash } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export const Department = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchDepartment();
      if (response) {
        setDepartments(response);
      }
    };
    fetchData();
  }, []);

  const handleDelete=async(id)=>{

    const response= await deleteDepartment(id)
    if (response===204){
      setDepartments((prevDepartment)=>prevDepartment.filter((department)=>department.id !==id))
      toast.success('deleted')
    }else{
      toast.error('try after some time')
    }

    console.log(id)
  }

  return (
    <div className="container mx-auto mt-8 relative">
     <Toaster position="top-center" reverseOrder={false}></Toaster>
      <h1 className="text-2xl font-semibold mb-4">Department List</h1>
      <Link to="/admin/add_department">
      <AiOutlineFileAdd
        className="text-3xl text-green-500 cursor-pointer absolute top-0 right-0 m-4"
        style={{ zIndex: 1 }}
      /></Link>
      <table className="w-full border border-collapse bg-gray-800 text-white">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td className="border p-2">{department.name}</td>
              <td className="border p-2">
                {department.description.split(' ').slice(0, 20).join(' ')}...
              </td>
              <td className="border p-2">
                <img
                  src={`${department.picture}`}
                  alt={department.name}
                  className="w-32 h-32 object-cover rounded-full"
                />
              </td>
              <td className="border p-2">
              <Link to={`/admin/edit_department/${department.id}`}>
                <button className="bg-blue-500 hover:bg-blue-700 m-6 text-white font-bold py-2 px-4 rounded mr-2">
                  <BiSolidEdit />
                </button></Link>
                <button
                onClick={()=>handleDelete(department.id)}
                 className="bg-red-500 hover:bg-red-700 m-6 text-white font-bold py-2 px-4 rounded">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
