import React, { useState } from 'react';
import { createTestTitle } from '../../Services/AdminService'; 
import { useNavigate } from 'react-router-dom';


export const AddTestTitles = () => {
  const history = useNavigate()
  const [formData, setFormData] = useState({
    test_name: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createTestTitle(formData);
      if (response) {
        // Assuming createTestTitle returns a response indicating success
        console.log('Test title created successfully.');
        // You can handle success here, such as redirecting to the test titles list page
        history('/admin/test_titles'); // Redirect to the test titles page
      }
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error('Error creating test title:', error);
    }
  };

  return (
    <div className="bg-gray-400 mt-32 shadow-md rounded px-8 py-6 w-96 mx-auto ">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Test Title</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="test_name">
            Test Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="test_name"
            name="test_name"
            value={formData.test_name}
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
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

