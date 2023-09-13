import React, { useState } from 'react';
import { createDepartment } from '../../Services/AdminService';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export const AddDepartment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    picture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      picture: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can add form validation here if needed.

    // Create a FormData object to send the form data including the picture file.
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('picture', formData.picture);

    // Call the createDepartment function to send the data to the server.
    const response = await createDepartment(formDataToSend);

    // Handle the response as needed, e.g., show a success message or handle errors.
    if (response) {
      // Handle success
      navigate('/admin/department');
      console.log('Department created successfully');
      // Reset the form
      setFormData({
        name: '',
        description: '',
        picture: null,
      });
    } else {
      // Handle error
      toast.error('Fill all fields');
      console.error('Error creating department');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Add Department</h1>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-600">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="picture" className="block text-gray-600">
              Picture:
            </label>
            <input
              type="file"
              id="picture"
              name="picture"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Department
          </button>
        </form>
      </div>
    </div>
  );
};
