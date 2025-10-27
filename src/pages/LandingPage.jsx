import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      {/* landing part */}
      <section style={{width:'100%',height:'100vh',backgroundImage:"url('./bg1.jpg')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}} className='container-fluid row align-items-center'>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4 shadow py-5 rounded mt-5 text-center' style={{backgroundColor:'rgba(255,255,255,0.5)'}}>
          <h3>Designed to get hired
          Your skills, Your story, Your next job - all in one</h3>
          <Link to={'/resume'} className='btn text-white' style={{backgroundColor:'brown'}}>Make Your Resume</Link>
        </div>
        <div className='col-md-4'></div>

      </div>

      </section>
      {/* tools */}
     <section className="my-5">
  <h1 className="text-center mb-4">Tools</h1>

  <div className="container">
    <div className="row align-items-center">
      {/* Left column */}
      <div className="col-md-6">
        <div className="my-3">
          <h4>Resume</h4>
          <p>Create unlimited new resumes and easily edit them afterwards.</p>
        </div>
        <div className="my-3">
          <h4>Cover Letter</h4>
          <p>Easily write a professional cover letter.</p>
        </div>
        <div className="my-3">
          <h4>Jobs</h4>
          <p>Automatically receive new and relevant job postings.</p>
        </div>
        <div className="my-3">
          <h4>Applications</h4>
          <p>Effortlessly manage and track your job applications in an organized manner.</p>
        </div>
      </div>

      {/* Right column */}
      <div className="col-md-6 text-center">
        <img
          src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png"
          alt="Resume Builder Preview"
          className="img-fluid rounded"
          style={{ height: "500px", objectFit: "cover" }}
        />
      </div>
    </div>
  </div>
</section>

      {/* image */}
      <section style={{height:'500px',width:'100%',backgroundImage:'url("./bg2.jpg")',backgroundPosition:'top',backgroundAttachment:'fixed',backgroundSize:'cover'}}>
       
      </section>
      {/* testimony */}
      <section className='m-5'>
        <h1 className='text-center my-5'>Testimonial</h1>
        <div className='row  container'>
          <div className='col-md-5'>
            <h3 className='my-5'>Trusted by Proffessional WorldWide</h3>
            <p className='fs-5' style={{textAlign:'justify'}}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>

             <p className='fs-5' style={{textAlign:'justify'}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>

             <p className='fs-5' style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>

             
          </div>
          <div className="col-md-1"></div>
          <div className='col-md-6 col-12'>
            <div className="row">
              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/happy-bearded-man-business-clothes-looking-camera_171337-11392.jpg" alt="" />
              </div>

              <div className="col-3">
                <img className='w-100' src="https://www.shutterstock.com/image-photo/portrait-smiling-hispanic-man-dressed-260nw-2605781241.jpg" alt="" />
              </div>

              <div className="col-3">
                <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgGIun58ScagqYb8bdxwYdVwgtNdUWPYmMTFeiuhsFlrtn5IrPKkpk2oBOBXFVGcXWrE&usqp=CAU" alt="" />
              </div>

              <div className="col-3">
                <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM7eAv7Ukc-UFveN8kK21ySR8uBxTB4j_PUY1llrQxJXrRqV6R6S7SuewC3zHjykPUov8&usqp=CAU" alt="" />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img className='w-100' src="https://media.istockphoto.com/id/1295694740/photo/studio-portrait-of-18-year-old-woman-with-brown-hair.jpg?s=612x612&w=is&k=20&c=eARMOX8UmTMJtD63qkdyBm25hMZHOH68xfTFjriPV-c=" alt="" />
              </div>

              <div className="col-3">
                <img className='w-100' src="https://media.istockphoto.com/id/1463457472/photo/portrait-of-young-beautiful-cute-cheerful-girl-smiling-over-white-background.jpg?s=612x612&w=is&k=20&c=nVh7EOekRq3ul15LKPmPgFg989NgasrSlDyII7ZTfJI=" alt="" />
              </div>

              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/happy-candid-girl-with-blond-hair-natural-make-up-smile-look-positive-camera-tilt-head-cute-stands-white-background-copy-space_176420-54120.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>

              <div className="col-3">
                <img className='w-100' src="https://st4.depositphotos.com/1017228/20282/i/450/depositphotos_202829902-stock-photo-close-portrait-smiling-young-man.jpg" alt="" />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img className='w-100' src="https://media.istockphoto.com/id/1212973182/photo/close-up-portrait-of-yong-woman-casual-portrait-in-positive-view-big-smile-beautiful-model.jpg?s=612x612&w=0&k=20&c=_30ouEHJQkhNAaM4C7MXDke_YDMQUF_hrkGGv8w8If4=" alt="" />
              </div>

              <div className="col-3">
                <img className='w-100' src="https://img.freepik.com/free-photo/blond-businessman-happy-expression_1194-3847.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>

              <div className="col-3">
                <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeX9QD5XwdxjH_iHv5LcIKrQQ0CBIXPp3mlyRGdzM32je6pjM_bGwRlxiDX4yKfE9rIII&usqp=CAU" alt="" />
              </div>

              <div className="col-3">
                <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcLkYBmIt9EKA03-1KbhJGdTgxkKPubtOxW5qfvpLJiPxa8y_2zEwJVOuLX9D314SpIQ&usqp=CAU" alt="" />
              </div>
            </div>
            </div>

          
        </div>
      </section>
    </div>
  )
}

export default LandingPage