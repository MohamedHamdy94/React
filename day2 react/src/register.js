import React from 'react';
import { useState } from 'react'

export default function Register() {
  const [LoginForm, setLoginForm] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });
  const [LoginError, setErrorForm] = useState({
    nameError: null,
    emailError: null,
    passwordError: null,
    cpasswordError: null,
  });
  const handelChang = (e) => {
    if (e.target.name === "email") {
      setLoginForm({
        ...LoginForm, email: e.target.value
      });
      
      setErrorForm({
        ...LoginError, emailError: e.target.value.length === 0 ? 'this fild is requird' : null,
      });

    } else if (e.target.name === "password") {
      setLoginForm({
        ...LoginForm, password: e.target.value
      })
      setErrorForm({
        ...LoginError, passwordError: e.target.value.length === 0 ? 'this fild is requird' : e.target.value.length > 8 ? 'not valid' : null,
      });
    }else if (e.target.name === "yourName") {
      setLoginForm({
        ...LoginForm, name: e.target.value
      })
      setErrorForm({
        ...LoginError, nameError: e.target.value.length === 0 ? 'this fild is requird' : e.target.value.length > 8 ? 'not valid' : null,
      });
    }else if (e.target.name === "cpassword") {
      setLoginForm({
        ...LoginForm, cpassword: e.target.value
      })
      setErrorForm({
        ...LoginError, cpasswordError: e.target.value.length === 0 ? 'this fild is requird' : e.target.value.length > 8 ? 'not valid' : null,
      });
    }
  }
  const handelSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>

      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Register</h2>

                  <form onSubmit={(e) => handelSubmit(e)}>


                                        <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Your Name</label>
                      <input name='yourName' onChange={(e) => handelChang(e)} type="text" className={`form-control ${LoginError.nameError ? 'border-danger' : ''}`} value={LoginForm.name}   placeholder="Your Name" />
                      <small className="form-text text-danger">
                        {LoginError.nameError}
                      </small>
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input name='email' onChange={(e) => handelChang(e)} type="email" className={`form-control ${LoginError.emailError ? 'border-danger' : ''}`} value={LoginForm.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                      <small id="emailHelp" className="form-text text-danger">
                        {LoginError.emailError}
                      </small>
                    </div>


                    <div className="form-group">

                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input name='password' onChange={(e) => handelChang(e)} type="password" className={`form-control ${LoginError.passwordError ? 'border-danger' : ''}`} value={LoginForm.password} id="exampleInputPassword1" placeholder="Password" />
                      <small  className="form-text text-danger">
                        {LoginError.passwordError}
                      </small>
                    </div>

                    <label htmlFor="exampleInputPassword1">Repeat your password</label>
                      <input name='cpassword' onChange={(e) => handelChang(e)} type="password" className={`form-control ${LoginError.cpasswordError ? 'border-danger' : ''}`} value={LoginForm.cpassword} id="exampleInputPassword1" placeholder="Repeat your password" />
                      <small  className="form-text text-danger">
                        {LoginError.cpasswordError}
                      </small>
                      

                    <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary m-3">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

