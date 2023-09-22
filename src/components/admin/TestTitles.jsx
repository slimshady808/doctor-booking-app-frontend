import React, { useState, useEffect } from 'react';
import {deleteTestTitles, fetchTestTitles } from '../../Services/AdminService';
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import {DeleteConfirmationModal} from '../../utils/DeleteConfirmationModal'
export const TestTitles = () => {
  const [testTitles, setTestTitles] = useState([]);
  const [showDeleteConfirmation,setShowDeleteConfirmation]=useState(false)
  const [testToDelete,setTestToDelete]=useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchTestTitles();
      if (response) {
        setTestTitles(response);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    setTestToDelete(id);
    setShowDeleteConfirmation(true)
  }
  const confirmDelete= async()=>{

    const response = await deleteTestTitles(testToDelete);
    if (response) {
      setTestTitles((prevTestTitles) => prevTestTitles.filter((testTitle) => testTitle.id !== testToDelete));
      toast.success('Deleted');
    } else {
      toast.error('Try again later');
    }
    setShowDeleteConfirmation(false)
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-black">Test Titles</h1>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
        <Link to="/admin/add_test_title">
          <AiOutlineFileAdd
            className="text-3xl text-green-500 cursor-pointer absolute top-0 right-0 m-4"
            style={{ zIndex: 1 }}
          />
        </Link>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Test Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {testTitles.map((testTitle) => (
              <tr key={testTitle.id}>
                <td className="px-6 py-4 whitespace-nowrap">{testTitle.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{testTitle.test_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{testTitle.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/admin/edit_test_title/${testTitle.id}`}>
                    <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2">
                      <BiSolidEdit />
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                    onClick={() => handleDelete(testTitle.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
                <DeleteConfirmationModal
                isOpen={showDeleteConfirmation}
                onRequestClose={() => setShowDeleteConfirmation(false)}
                onConfirmDelete={confirmDelete}
              />
          </tbody>
        </table>
      </div>
    </div>
  );
};


