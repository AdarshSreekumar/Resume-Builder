
import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center p-5 flex-column'>
      <img width={'50%'} src="https://img.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788958.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
      <Link to={'/'} className='btn btn-brown'>Go to Home</Link>
    </div>
  )
}

export default Pnf