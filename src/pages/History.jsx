import { Box, Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <div>
      <h2 className='text-center my-5'>Downloaded Resume History</h2>
      <Link to={'/resume'} className=' btn text-white float-end me-5' style={{marginTop:'-80px',backgroundColor:'brown'}}>Back</Link>
      <Box component="section" className='container-fluid'>
        <div className="row">
          <div className="col-md-4">
            <Paper elevation={6} sx={{my:5,p:5,textAlign:'center'}}>
              <div className="d-flexjustify-content-center">
                <h6>Review At: 8/29/2025, 9:28:21 AM</h6>
                <button className='btn text-danger fs-4'><MdDelete /></button>
              </div>
              <div className='border rounded p-3'>
                <img style={{ width: '200px', height: '200px' }} src="https://cultivatedculture.com/wp-content/themes/x5-child/assets/images/templates/template5.jpg" alt="resume" />

              </div>
            </Paper>

          </div>
        </div>
     
      </Box>

    </div>
  )
}

export default History