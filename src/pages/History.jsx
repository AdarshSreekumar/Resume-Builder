import { Box, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI';

function History() {

  const [allHistory,setAllHistory]=useState([])

  console.log(allHistory);

  useEffect(()=>{
    getHistory()
  },[])
  

  // function to get API
  const getHistory=async ()=>{
    try {
      const result=await getHistoryAPI()
      console.log(result);
      if (result.status==200) {
        setAllHistory(result.data)
      }
      
    } catch (err) {
      console.log(err);
      
    }
  }

  // to delete
  const deleteHistory=async(id)=>{
    try {
      await removeHistoryAPI(id)
      getHistory()
    } catch (err) {
      console.log(err);
      
    }
  }

  return (
    <div>
      <h2 className='text-center my-5'>Downloaded Resume History</h2>
      <Link to={'/resume'} className=' btn text-white float-end me-5' style={{marginTop:'-80px',backgroundColor:'brown'}}>Back</Link>
      <Box component="section" className='container-fluid'>
        <div className="row">
          {
            allHistory.length>0?
              allHistory?.map(item=>(
                <div key={item?.id} className="col-md-4">

                  <Paper elevation={6} sx={{my:5,p:5,textAlign:'center'}}>
              <div className="d-flexjustify-content-center">
                <h6>Review At: {item?.timeStamp}</h6>
                <button onClick={()=>deleteHistory(item?.id)} className='btn text-danger fs-4'><MdDelete /></button>
              </div>
              <div className='border rounded p-3'>
                <img style={{ width: '200px', height: '200px' }} src={item?.resumeImg} alt="resume" />

                </div>
                  </Paper>
                </div>
              ))
                :
                <p>No resumes are downloaded yet</p>
              }
          </div>
        
     
      </Box>

    </div>
  )
}

export default History