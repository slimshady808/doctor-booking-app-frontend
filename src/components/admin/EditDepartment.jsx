import React, { useState, useEffect } from 'react';
import { getDepartment, updateDepartment } from '../../Services/AdminService';
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export const EditDepartment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    picture: null,
  });

  const [currentImage, setCurrentImage] = useState(null); // To display the current image

  useEffect(() => {
    // Fetch the department data for the given ID
    async function fetchDepartment() {
      try {
        const department = await getDepartment(id);
        setFormData({
          name: department.name,
          description: department.description,
          picture: null, // You can set the picture here if needed
        });
        setCurrentImage(department.picture); // Set the current image
      } catch (error) {
        // Handle error, e.g., show a toast message or navigate to an error page
        console.error('Error fetching department:', error);
      }
    }

    fetchDepartment();
  }, [id]);

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

    // Display the selected image in the preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setCurrentImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the form data including the picture file.
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);

    // Check if a new image has been selected
    if (formData.picture) {
      formDataToSend.append('picture', formData.picture);
    }

    // Call the updateDepartment function to send the data to the server.
    try {
      const response = await updateDepartment(id, formDataToSend);

      // Handle the response as needed, e.g., show a success message or handle errors.
      if (response) {
        // Handle success
        navigate(`/admin/department/`);
        console.log('Department updated successfully');
      } else {
        // Handle error
        toast.error('Failed to update department');
        console.error('Error updating department');
      }
    } catch (error) {
      // Handle any network or server errors
      console.error('Error updating department:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <h1 className="text-2xl font-semibold mb-4">Edit Department</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
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
          {currentImage && (
            <img
              src={currentImage}
              alt="Current Department Image"
              className="mb-2 mx-auto max-h-40"
            />
          )}
          <input
            type="file"
            id="picture"
            name="picture"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Department
        </button>
      </form>
    </div>
  );
};
