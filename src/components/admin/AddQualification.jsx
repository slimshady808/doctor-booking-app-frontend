import React, { useState } from 'react';
import { createQualifications } from '../../Services/AdminService';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export const AddQualification = () => {
  const navigate=useNavigate()
  const [qualificationData, setQualificationData] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQualificationData({ ...qualificationData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createQualifications(qualificationData);
      if (response===201) {
        console.log(response)
        toast.success(' qualification added')
        navigate('/admin/qualification')

        // console.log('Qualification created successfully.');
      }else{
        toast.error('please fill all fields')
      }
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error('error for creating qualification',error)
      
    }
  };

  return (
    <div className="bg-gray-300 shadow-md rounded px-8 py-6 w-96 mx-auto mt-32">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <h1 className="text-2xl font-bold mb-4 text-center">Add Qualification</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="title"
            name="title"
            value={qualificationData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            value={qualificationData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Qualification
          </button>
        </div>
      </form>
    </div>
  );
};


