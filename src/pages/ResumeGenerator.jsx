import React from 'react'
import { IoIosDocument } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ResumeGenerator() {
  return (
    <div>
      <div className='container-fluid'>
        <h2 className='text-center my-5'>Create a Job Winning Resume in Minutes</h2>
        <div style={{height:'60vh'}} className='row justify-content-center align-items-center'>
          <div className="col-md-1"></div>
          <div className="col-md-4 border  rounded shadow p-5 text-center">
            <IoIosDocument className='text-primary fs-1 mb-3'/>
            <h4>Add Your Information</h4>
            <p>Add pre-written examples to each section</p>
            <h3>Step 1</h3>

          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4 border  rounded shadow p-5 text-center">
            <FaFileDownload  className='text-primary fs-1 mb-3'/>
            <h4>Download your Resume</h4>
            <p>Download and start Applying </p>
            <h3>Step 2</h3>

          </div>
          <div className="col-md-1">

          </div>
          <div className='text-center mb-5'>
            <Link to={'/form'} className='btn text-white' style={{backgroundColor:'brown'}}>Let's Start</Link>

          </div>


        </div>
      </div>
    </div>
  )
}

export default ResumeGenerator