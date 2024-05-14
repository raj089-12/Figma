import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
const Hyggex = () => {
  return (
    <div>
        <div className='container'>
        <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-6 '>
    <img src='https://res.cloudinary.com/do4vytmxm/image/upload/v1695803892/images/Logo_ev7w4u.png'/>
    </div>
        <div className='col-sm-6 col-md-6 col-lg-6'id='mobe'>
         
            <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary ">
  <div class="container-fluid">
              <Link className ="navbar-brand" to="/"></Link>
              
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div className = "collapse navbar-collapse" id='navbarSupportedContent'>
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item  nap">
            <Link className="nav-link active"aria-current="page" to="/" id='doll'>Home</Link>
          </li>
          <li className="nav-item nap">
            <Link className="nav-link active" to="/" id='doll'> Flashcard</Link>
            </li>
            <li className="nav-item nap">
       <Link className="nav-link active" to="/" id='doll'>Contact</Link>
            </li>
            <li className="nav-item nap">
              <Link className="nav-link active" to="/" id='doll'>FAQ </Link>
            </li>
       
        </ul>
        <button className='btn btn-'id='key'>Login</button>
      </div>
            </div>
          </nav>
          </div>
          </div>
        </div>
        <div className='container'id='lion'>
          <span className='cam'><i class="fa-solid fa-house"></i><i class="fa-solid fa-chevron-right"></i>Flashcard</span>
      <span className='cam'><i class="fa-solid fa-chevron-right"></i>mathematics</span>
      <span className='cam'id='doll'><i class="fa-solid fa-chevron-right"></i>Realtion and function</span>
      <h3 className='mt-5'id='doll'>Relations and Functions ( Mathematics )</h3>
            <div className='text-center mt-5'>
            <span className='me-5'style={{textDecoration:"underline",color:"#06286E"}}  id='doll'>study</span><span className='me-5' id='doll'>quiz</span><span className='me-5' id='doll'>test</span><span className='me-5' id='doll'>game</span><span className='me-5' id='doll'>other</span>
           </div>
         </div> 
    
    


     

     

        


        <section class=" gradient-custom mt-5">
        <div class="container">

  <div class="row   justify-content-center">
  <div class="col-12 col-md-8 col-lg-6 col-xl-5 " >
  
   <div class="card  text-white " id='grad' style={{borderRadius:'1rem'}}>
  
    <i class="fa-solid fa-lightbulb"></i>
    <i class="fa-solid fa-volume-low"></i>
   <div class="card-body  text-center">
   <h5 className='rapid'>9 + 6 + 7x - 2x - 3</h5>
    <div class="mb-md-5 mt-md-4 ">
      </div> 
      </div>
      </div>
      
      </div>
         
       
    </div>
    </div>
    </section>
       

    <div className='container mt-5'>
    <div className='row'>
        <div className='col-12 col-md-8 col-lg-8 text-center'>
     <i class="fa-solid fa-rotate-right" id='pill'></i>
     </div>
     <div className='col-12 col-md-4 col-lg-4'>
     <i class="fa-solid fa-expand" id='pill'></i>
     </div>
     </div></div>
     <h4 className='text-center'> <i class="fa-solid fa-chevron-left"></i>
   01/10
   <i class="fa-solid fa-chevron-right" id='spy'></i>
   </h4>
    

    <div className='container tape'>
      <div className='row'>
        <div className='col-sm-12 col-md-8 col-lg-8'>
          <h5 className='kali'>published by</h5>
          <img src='https://res.cloudinary.com/do4vytmxm/image/upload/v1695803892/images/Logo_ev7w4u.png'id='mobi'/>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4' id='mob'>
        <i class="fa-solid fa-plus"></i> 
        <span>create Flashcard</span>
        </div>

      </div>
    </div>

    <div className='container tape'>
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-6'>
          <h4>FAQ</h4>
          <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item"  id='banana'>
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Can education flashcards be used for all age groups ?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the  class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item"  id='banana'>
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        How do education flashcards works ?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item"  id='banana'>
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Can education flashcards be used for test preparation ?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the  class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
     </div>
     
  )
}

export default Hyggex;
