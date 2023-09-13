import React, { useState, useEffect } from 'react';
import { getTestTitle, updateTestTitle } from '../../Services/AdminService'; // You should define these functions
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export const EditTestTitles = () => {
  const { id } = useParams();
  const history = useNavigate()
  const [formData, setFormData] = useState({
    test_name: '',
    description: '',
  });

  useEffect(() => {
    const fetchTestTitle = async () => {
      try {
        const response = await getTestTitle(id);
        if (response) {
          setFormData({
            test_name: response.test_name,
            description: response.description,
          });
        }
      } catch (error) {
        console.error('Error fetching test title:', error);
      }
    };
    fetchTestTitle();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateTestTitle(id, formData);
      if (response) {
        toast.success('updated')
        console.log('Test title updated successfully.');
        
        history('/admin/test_titles');
      }else{
        toast.error('fill allfields')
      }
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error('Error updating test title:', error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 py-6 w-96 mx-auto mt-10">
    <Toaster position="top-center" reverseOrder={false}></Toaster>
      <h1 className="text-2xl font-bold mb-4 text-center">Edit Test Title</h1>
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



