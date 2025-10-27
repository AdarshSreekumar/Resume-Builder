import React from 'react'
import Userinputs from '../components/Userinputs'
import Preview from '../components/Preview'

function UserForm() {
  return (
    <div className='conatiner'>
      <div className='row p-5'>
        <div className='col-lg-6'>
          <Userinputs/>
        </div>
        <div className='col-lg-6'>
          <Preview/>
        </div>
      </div>
    </div>
  )
}

export default UserForm