import { Divider,Button } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div style={{margin:'80px'}} className='shadow p-5 rounded text-center'>
      <h2>Name</h2>
      <h4>Job Title</h4>
      <h6><span className='mx-2'>Location</span>|<span className='mx-2'>E mail</span>|<span className='mx-2'>Mobile</span></h6>
      <p className='my-3' >
        <a href="" target='_blank'>GITHUB</a> | 
        <a href="" target='_blank'>LINKEDIN</a> | 
        <a href="" target='_blank'>PORTFOLIO</a>
      </p>

      <Divider sx={{fontSize:'25px'}}>Summary</Divider>
      <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur animi velit sapiente. Ea voluptas facere dolore aliquam est unde quos, placeat dolor laboriosam provident! Velit suscipit quibusdam aliquam ipsa.</p>

      <Divider sx={{fontSize:'25px'}}>Education</Divider>
      <h5 className='mt-2'>Course Name</h5>
      <p> <span className='mx-2'>College</span>|<span className='mx-2'>University</span>|<span className='mx-2'>Passout year</span></p>

      <Divider sx={{fontSize:'25px'}}>Professional Experience</Divider>
      <h5 className='mt-2'>Course Name</h5>
      <p> <span className='mx-2'>Job / Intership</span>|<span className='mx-2'>Company name</span>|<span className='mx-2'>Company location</span>|<span className='mx-2'>Duration</span></p>

      <Divider sx={{fontSize:'25px'}}>Skills</Divider>
      <div className="d-flex flex-wrap justify-content-between">
        <Button variant='contained' className='m-1'>NODE JS</Button>
      </div>
    </div>
  )
}

export default Preview