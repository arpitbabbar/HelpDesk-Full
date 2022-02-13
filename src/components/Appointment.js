import React, { useState } from 'react'
import './appointment.css'
function Appointment() {

    const [details, setdetails] = useState("");

    const getDetails = async (number) => {
       console.log(number + " getdeatils");
        const response = await fetch(`http://localhost:3001/api/getDetails/${number}`);
          console.log(response);
          const json = await response.json();
        //   res.send(json);
          console.log(json);
    }

    const handleClick = () =>{
        const num = document.getElementById("number").value;
        console.log(num + " handle");
        getDetails(num);

    }


    return (
        <>
        <div>
            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h2>Appointment</h2>
                                <h6 className="mb-0 pb-3"><span>Status</span><span>New</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label htmlFor="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Appointment Details</h4>
                                                    <div className="form-group">
                                                        <input type="text" name="number" className="form-style" placeholder="User ID (Contact Number)" id="number" autoComplete="off" />
                                                            <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <a href="#" className="btn mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleClick}>submit</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-2 pb-3">New Appointment</h4>
                                                    <div className="form-group">
                                                        <input type="text" name="name" className="form-style" placeholder="Your Full Name" id="name" autoComplete="off" />
                                                            <i className="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="email" name="number" className="form-style" placeholder="Your Contact Number (User ID)" id="number" autoComplete="off" />
                                                            <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="text" name="doctorName" className="form-style" placeholder="Doctor's Name" id="doctorName" autoComplete="off" />
                                                            <i className="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="date" name="date" className="form-style" placeholder="Appointment Date" id="date" autoComplete="off" />
                                                            <i className="input-icon uil uil-user"></i>
                                                    </div>
                                                    
                                                    <a href="#" className="btn mt-4">submit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className='appointment'>Appointment via Phone Call</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

{/* ============ MODAL========= */}

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</>

    )
}

export default Appointment