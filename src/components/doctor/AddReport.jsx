import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {createReport,getReport,updateReport} from '../../Services/DoctorService'
import {Toaster, toast} from 'react-hot-toast'
import { AddTestResult } from './AddTestResult';
import { DoctorViewReport } from './DoctorViewReport';

export const AddReport = () => {
  const { bookingId,patientId,doctorId } = useParams();
  const [symptoms, setSymptoms] = useState('');
  const [extraNotes, setExtraNotes] = useState('');
  const [medicine, setMedicine] = useState('');
  const [reportId,setReportId] =useState('')

  useEffect(()=>{
    const fetchReportData = async ()=>{
      try{
        const reportData = await getReport(bookingId);
        if (reportData){
          setSymptoms(reportData.symptoms)
          setExtraNotes(reportData.extra_notes)
          setMedicine(reportData.medicine)
          setReportId(reportData.id)
        }
      }catch(error){
        console.log(error)
      }
    }
      fetchReportData()
  },[bookingId])


console.log(reportId,'report id is ')

  const handleSubmit = async (e)=>{
   e.preventDefault();
   const formData ={
    symptoms,
    extra_notes:extraNotes,
    medicine,
    booking_id:bookingId,
    patient_id: patientId,
    doctor_id:doctorId
   };
   try{
    if (reportId){
      response= await updateReport(reportId,formData);
    }else{
      response= await createReport(formData);
    }
    console.log('report updated:',response)
    
   }catch(error){
    console.error('Error saving/updating test result:', error)
    
   }
   
  };


 return (
  <div className="container mx-auto p-4">
    <Toaster position='top-center' reverseOrder='false' ></Toaster>
      <h2 className="text-2xl font-semibold mb-4 text-center">
      {reportId ? 'Edit the Report' : 'Add the report'}
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="symptoms" className="block font-medium mb-1">
            Symptoms
          </label>
          <input
            type="text"
            id="symptoms"
            className="w-full border rounded p-2"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="extraNotes" className="block font-medium mb-1">
            Extra Notes
          </label>
          <textarea
            id="extraNotes"
            className="w-full border rounded p-2"
            value={extraNotes}
            onChange={(e) => setExtraNotes(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="medicine" className="block font-medium mb-1">
            Medicine
          </label>
          <input
            type="text"
            id="medicine"
            className="w-full border rounded p-2"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          {reportId ? 'Update the result':'Add result'}
        </button>
      </form>
      <div  className="max-w-md mx-auto flex space-x-3" >
      { reportId ? <AddTestResult reportId={reportId}/>: <h1></h1>}
      { reportId ? <DoctorViewReport reportId={reportId}/>: <h1></h1>}
      </div>
    </div>
  )
}
