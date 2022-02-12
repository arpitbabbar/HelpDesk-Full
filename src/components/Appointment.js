import React from 'react'
import './appointment.css'
function Appointment() {
    return (
        <div>
            <div class="section">
                <div class="container">
                    <div class="row full-height justify-content-center">
                        <div class="col-12 text-center align-self-center py-5">
                            <div class="section pb-5 pt-5 pt-sm-2 text-center">
                                <h2>Appointment</h2>
                                <h6 class="mb-0 pb-3"><span>Status</span><span>New</span></h6>
                                <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label for="reg-log"></label>
                                <div class="card-3d-wrap mx-auto">
                                    <div class="card-3d-wrapper">
                                        <div class="card-front">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-4 pb-3">Appointment Details</h4>
                                                    <div class="form-group">
                                                        <input type="text" name="number" class="form-style" placeholder="User ID (Contact Number)" id="number" autocomplete="off" />
                                                            <i class="input-icon uil uil-at"></i>
                                                    </div>
                                                    <a href="#" class="btn mt-5">submit</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-back">
                                            <div class="center-wrap">
                                                <div class="section text-center">
                                                    <h4 class="mb-2 pb-3">New Appointment</h4>
                                                    <div class="form-group">
                                                        <input type="text" name="name" class="form-style" placeholder="Your Full Name" id="name" autocomplete="off" />
                                                            <i class="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="email" name="number" class="form-style" placeholder="Your Contact Number (User ID)" id="number" autocomplete="off" />
                                                            <i class="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="text" name="doctorName" class="form-style" placeholder="Doctor's Name" id="doctorName" autocomplete="off" />
                                                            <i class="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div class="form-group mt-2">
                                                        <input type="date" name="date" class="form-style" placeholder="Appointment Date" id="date" autocomplete="off" />
                                                            <i class="input-icon uil uil-user"></i>
                                                    </div>
                                                    
                                                    <a href="#" class="btn mt-4">submit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment