import React, { useContext } from "react";
import "../../styles/newcontact.css"; 
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useState } from "react";

export const NewContact = () => {

  const { actions } = useContext(Context);

  const [formData, setFormData] = useState({
    name : '',
    phone : '',
    email : '',
    address : ''
  })
  
  const handleChange = e => {
    const { name, value } =e.target
    setFormData({...formData, [name]: value})
  }


  const handleAddContact = e => {
    e.preventDefault();
    actions.handleAddContact(formData)
  }
  

  return (

    <form className="form mx-auto" onSubmit={handleAddContact}>
      <div className="mb-3">
        <label for="name" className="form-label text-light">Name</label>
        <input type="text" className="form-control" name="name" onChange={handleChange} value={formData.name} required />
      </div>
      <div className="mb-3">
        <label for="phone" className="form-label text-light">Phone</label>
        <input type="tel" className="form-control" name="phone" onChange={handleChange} value={formData.phone} required/>
      </div>
      <div className="mb-3">
        <label for="email" className="form-label text-light">Email</label>
        <input type="email" className="form-control" name="email" onChange={handleChange} value={formData.email} required/>
      </div>
      <div className="mb-3">
        <label for="address" className="form-label text-light">Address</label>
        <input type="text" className="form-control" name="address" onChange={handleChange} value={formData.address} required/>
      </div>

      
      <div className="d-flex justify-content-between">
        <Link to="/" className="btn btn-success button2">Go back home</Link>
        <input type="submit" className="btn btn-primary button1" value="Add contact"/>
      </div>
    </form>


  )
}