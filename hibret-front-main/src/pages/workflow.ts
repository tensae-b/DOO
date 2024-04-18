import React, { useState,useNavigate } from 'react';

const MyForm = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  // const navigate = useNavigate();

  const saveEmployee = (e) => {
      e.preventDefault();

      const employee = {firstName, lastName, email}
      
      console.log(employee)
  }

  return (
      <div>
         <br /><br />
         <div className = "container">
              <div className = "row">
                  <div className = "card col-md-6 offset-md-3 offset-md-3">
                  <h2 className = "text-center">Add new Document</h2>
                      <div className = "card-body">
                          <form>
                              <div className = "form-group mb-2">
                                  <label className = "form-label"> Document Name :</label>
                                  <input
                                      type = "text"
                                      placeholder = "Enter first name"
                                      name = "firstName"
                                      className = "form-control"
                                      value = {firstName}
                                      onChange = {(e) => setFirstName(e.target.value)}
                                  >
                                  </input>
                              </div>

                              <div className = "form-group mb-2">
                                  <label className = "form-label"> Document Type :</label>
                                  <input
                                      type = "text"
                                      placeholder = "Enter last name"
                                      name = "lastName"
                                      className = "form-control"
                                      value = {lastName}
                                      onChange = {(e) => setLastName(e.target.value)}
                                  >
                                  </input>
                              </div>

                            
                          </form>

                      </div>
                  </div>
              </div>

         </div>
         <div className = "container">
              <div className = "row">
                  <div className = "card col-md-6 offset-md-3 offset-md-3">
                  <h2 className = "text-center">Add new Document</h2>
                      <div className = "card-body">
                          <form>
                              <div className = "form-group mb-2">
                                  <label className = "form-label"> Document Name :</label>
                                  <input
                                      type = "text"
                                      placeholder = "Enter first name"
                                      name = "firstName"
                                      className = "form-control"
                                      value = {firstName}
                                      onChange = {(e) => setFirstName(e.target.value)}
                                  >
                                  </input>
                              </div>

                              <div className = "form-group mb-2">
                                  <label className = "form-label"> Document Type :</label>
                                  <input
                                      type = "text"
                                      placeholder = "Enter last name"
                                      name = "lastName"
                                      className = "form-control"
                                      value = {lastName}
                                      onChange = {(e) => setLastName(e.target.value)}
                                  >
                                  </input>
                              </div>

                              <div className = "form-group mb-2">
                                  <label className = "form-label"> Email Id :</label>
                                  <input
                                      type = "email"
                                      placeholder = "Enter email Id"
                                      name = "email"
                                      className = "form-control"
                                      value = {email}
                                      onChange = {(e) => setEmail(e.target.value)}
                                  >
                                  </input>
                              </div>

                              <button className = "btn btn-success" onClick = {(e) => saveEmployee(e)} >Submit </button>
                              {/* <Link to="/employees" className="btn btn-danger"> Cancel </Link> */}
                          </form>

                      </div>
                  </div>
              </div>

         </div>

      </div>
  )
}
      
export default MyForm