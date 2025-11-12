import React, { useEffect, useState } from 'react'
import  Preview  from "../components/Preview"
import { Link, useParams } from 'react-router-dom'
import { addHistoryAPI, getResumeAPI } from '../services/allAPI';
import { FaFileDownload } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoMdRefreshCircle } from "react-icons/io";
import { FaFastBackward } from "react-icons/fa";
import Edit from '../components/Edit';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

function ViewResume() {

  const {id}=useParams()
  console.log(id);

  const [resume,setResume]=useState({})

  useEffect(()=>{
    getResumeDetails()
  },[])


  const getResumeDetails=async ()=>{
    const result = await getResumeAPI(id)
    console.log(result)
    if (result.status==200) {
      setResume(result.data)
    }
  }

  // for resume download
  const handleDownloadResume = async ()=>{

    // create pdf document
    const doc = new jsPDF();
    const preview=document.getElementById("preview")

    // screenshot of preview - html2canvas
    const canvas = await html2canvas(preview,{scale:2})
    // console.log(canvas);

    // convert canvas to image
    const resumeImg = canvas.toDataURL('image/png')
    console.log(resumeImg);

    
    // add screenshot to pdf
    const imgWidth=doc.internal.pageSize.getWidth()
    const imgHeight=doc.internal.pageSize.getHeight()
    doc.addImage(resumeImg,'PNG',0,0,imgWidth,imgHeight)

    // download pdf
    doc.save('resume.pdf')

    // local time date - create obj for date
    const localTimeDate=new Date()
    // console.log(localTimeDate);
    const timeStamp=`${localTimeDate.toLocaleDateString()},${localTimeDate.toLocaleTimeString()}`
    // console.log(timeStamp);
    try{
      await addHistoryAPI({timeStamp,resumeImg})

    }catch(err){
      console.log(err);
      
    }
    
    

  }


  return (
    <>
    
        <div className=''>
            <div className='row container'>
                <div className='col-md-2'></div>
                <div className='col-md-8 col-12'>
                    <div className="d-flex justify-content-center align-items-center mt-5">
                      <button onClick={handleDownloadResume} className='btn fs-4 text-primary'><FaFileDownload/></button>
                      {/* <button className='btn fs-4 text-warning'><FaEdit/></button> */}
                      <Edit resumeDetails={resume} setResumeDetails={setResume}/>
                      <Link to={'/history'} className='btn fs-4 text-primary'><IoMdRefreshCircle/></Link>
                      <Link to={'/resume'} className='btn fs-4 text-success'><FaFastBackward/></Link>

                    </div>
                    <div id='preview'><Preview resumeDetails={resume}/></div>

                </div>
                <div className='col-md-2'></div>

            </div>

        </div>
    
    </>
  )
}

export default ViewResume