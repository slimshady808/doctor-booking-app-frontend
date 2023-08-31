
import React, { useEffect, useState } from 'react'
import {fetchTests} from '../../Services/DoctorService'
import { toast,Toaster } from "react-hot-toast";
import {deleteTest} from '../../Services/DoctorService'
// import { toast } from 'react-hot-toast';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DoctorViewReport = (props) => {
  const re='http://127.0.0.1:8000/media/test_results/No.Starch.Python.Oct_.2015._O2Rjd9R.pdf'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tests,setTests]=useState([])
  const {reportId} =props

  useEffect(()=>{
    const fetchData=async()=>{
      const response = await fetchTests(reportId)
      if (response){
        setTests(response)
      }
    }
    fetchData()
  },[isModalOpen])
console.log(tests,'test')

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
const handleDelete = async  (testId)=>{
  const data = await deleteTest(testId)
  if (data===204){
    setTests((prevTests) => prevTests.filter((test) => test.test_id !== testId));
    toast.success('deleted')
  }
}



  return (
    <>
    {/* Modal toggle */}
    <button
      onClick={toggleModal}
      data-modal-target="authentication-modal"
      data-modal-toggle="authentication-modal"
      className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm my-5 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
     view results:
    </button>

    {/* Main modal */}
    {isModalOpen && (
      <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-40"
    >
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg dark:bg-gray-700">
        {/* Modal content */}
        <button
          onClick={toggleModal}
      type="button"
      className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
    >
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span className="sr-only">Close modal</span>
    </button>

    <div className="bg-white">
    <Toaster position='top-center' reverseOrder='false' ></Toaster>
              <h2 className="text-2xl font-semibold mb-4">Test Results</h2>
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="py-2 px-4">Test Name</th>
                    <th className="py-2 px-4">Date</th>
                    <th className="py-2 px-4">Notes</th>
                    <th className="py-2 px-4">Result</th>
                    <th className="py-2 px-4">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {tests.map((test) => {
                      const result_file=`http://localhost:8000${test.result}`;
                    return(
                      
                    <tr key={test.test_id} className="border-t">
                      <td className="py-2 px-4">{test.test_name}</td>
                      <td className="py-2 px-4">{test.test_date}</td>
                      <td className="py-2 px-4">{test.notes}</td>
                      <td className="py-2 px-4">
                        <a
                          href={result_file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          View Result
                        </a>
                      </td>
                      <td className="py-2 px-4">
                      
                        <a className='text-red-500' onClick={()=>handleDelete(test.test_id)}>delete</a>
                      </td>
                    </tr>
                    );
                  }
                  )
                  }
                </tbody>
              </table>
            </div>





    </div>
 </div>

    )}
  </>
  )
}
