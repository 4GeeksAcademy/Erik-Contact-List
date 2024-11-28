import React from "react";
import "../../styles/newcontact.css"; 
import { Link } from "react-router-dom";

export const NewContact = () => {

  return (

    <form className="form mx-auto">
      <div className="mb-3">
        <label for="Name" className="form-label text-light">Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label for="phone" className="form-label text-light">Phone</label>
        <input type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label for="Name" className="form-label text-light">Email</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label for="Name" className="form-label text-light">Addres</label>
        <input type="text" className="form-control" />
      </div>
      <div className="d-flex justify-content-between">
        <Link to="/" className="btn btn-success button2">Go back home</Link>
        <button type="" className="btn btn-primary button1">Submit</button>
      </div>
    </form>


  )
}