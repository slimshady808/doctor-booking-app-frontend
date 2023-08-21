import React, { useEffect, useState } from 'react'
import {get_test_titles,createTest} from  '../../Services/DoctorService'
import {Toaster, toast} from 'react-hot-toast'
export const AddTestResult = (props) => {
  const {reportId}=props
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testTitles,setTestTitles]=useState([])
  const [selectedTest,setSelectedTest]=useState("")
  const [result,setResult]=useState("")
  const [notes, setNotes]= useState("")

  useEffect(() => {
    const fetchData = async () => {
      if (isModalOpen) {
        const data = await get_test_titles();
        if (data) {
          setTestTitles(data)
        }
      }
    };
  
    fetchData();
  }, [isModalOpen]);

 const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleTestSelect = (e)=>{
    setSelectedTest(e.target.value)
    console.log(e.target.value)
    console.log(notes,'hii')
    console.log()
  }



  const handleSubmit = async ()=>{
    if (!selectedTest || ! notes){
      toast.error('please select test and add notes before uploading')
      return
    }
    const formData = new FormData();
    formData.append('test_title', selectedTest);
    formData.append('report', reportId);
    formData.append('notes', notes);
    formData.append('date_of_test', new Date().toISOString().split('T')[0]);
    if (result) {
      formData.append('result', result, result.name); // Append the file data
    }
    console.log(formData);
    const data= await createTest(formData)
    if (data){
      toast.success('result added')
      toggleModal()
      setTestTitles([]);
      setSelectedTest('');
      setResult('');
      setNotes('');
    }else{
      toast.error('error occured')
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
     Add Test Result
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
    <h2 className="text-xl font-semibold mb-4">Add Test Result</h2>
    <div className="mb-4">
    <Toaster position='top-center' reverseOrder='false' ></Toaster>
      <label htmlFor="testTitle" className="block font-medium mb-1">
        Select Test Title
      </label>
      <select
        id="testTitle"
        className="w-full border rounded p-2"
        value={selectedTest}
        onChange={handleTestSelect}
        required
      >
        <option value="">Select a Test Title</option>
        {testTitles.map((title) => (
          <option key={title.id} value={title.id}>
            {title.test_name}
          </option>
        ))}
      </select>
    </div>
    <div className="mb-4">
      <label htmlFor="result" className="block font-medium mb-1">
        Test Result (PDF)
      </label>
      <input
        type="file"
        id="result"
        className="w-full border rounded p-2"
        accept=".pdf"
        onChange={(e) => setResult(e.target.files[0])}
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="notes" className="block font-medium mb-1">
        Notes
      </label>
      <textarea
        id="notes"
        className="w-full border rounded p-2"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </div>
    <button
      type="button"
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      onClick={handleSubmit}
    >
      Save Test Result
    </button>
  </div>
 </div>

    )}
  </>
  )
}


