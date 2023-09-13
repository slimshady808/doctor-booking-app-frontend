import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQualification, updateQualification } from '../../Services/AdminService'; // You'll need to define these functions
import toast, { Toaster } from 'react-hot-toast';
export const EditQualification = () => {
  const { id } = useParams();
  const [qualificationData, setQualificationData] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    // Fetch the qualification data based on the ID
    const fetchQualificationData = async () => {
      try {
        const response = await getQualification(id);
        if (response) {
          setQualificationData(response); // Assuming getQualification returns qualification data
        }
      } catch (error) {
        console.error('Error fetching qualification data:', error);
      }
    };

    fetchQualificationData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQualificationData({ ...qualificationData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateQualification(id, qualificationData);
      if (response) {
        // Assuming updateQualification returns a response indicating success
        toast.success('updated')
        console.log('Qualification updated successfully.');
        // You can handle success here, such as redirecting to the qualifications list page
      }else{
        toast.error('please fill all fields')
      }
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error('Error updating qualification:', error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 py-6 w-96 mx-auto mt-10">
    <Toaster position="top-center" reverseOrder={false}></Toaster>
      <h1 className="text-2xl font-bold mb-4 text-center">Edit Qualification</h1>
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
            Save
          </button>
        </div>
      </form>
    </div>
  );
};


