import React, { useEffect, useState } from 'react'
import  Preview  from "../components/Preview"
import { Link, useParams } from 'react-router-dom'
import { getResumeAPI } from '../services/allAPI';
import { FaFileDownload } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoMdRefreshCircle } from "react-icons/io";
import { FaFastBackward } from "react-icons/fa";
import Edit from '../components/Edit';

function ViewResume() {

  const {id}=useParams()
  console.log(id);

  const [resume,setResume]=useState({})

  useEffect(()=>{
    getResumeDetails()
  })


  const getResumeDetails=async ()=>{
    const result = await getResumeAPI(id)
    console.log(result)
    if (result.status==200) {
      setResume(result.data)
    }
  }


  return (
    <>
    
        <div className=''>
            <div className='row container'>
                <div className='col-md-2'></div>
                <div className='col-md-8 col-12'>
                    <div className="d-flex justify-content-center align-items-center mt-5">
                      <button className='btn fs-4 text-primary'><FaFileDownload/></button>
                      {/* <button className='btn fs-4 text-warning'><FaEdit/></button> */}
                      <Edit resumeDetails={resume} setResumeDetails={setResume}/>
                      <Link to={'/history'} className='btn fs-4 text-primary'><IoMdRefreshCircle/></Link>
                      <Link to={'/resume'} className='btn fs-4 text-success'><FaFastBackward/></Link>

                    </div>
                    <Preview resumeDetails={resume}/>

                </div>
                <div className='col-md-2'></div>

            </div>

        </div>
    
    </>
  )
}

export default ViewResume