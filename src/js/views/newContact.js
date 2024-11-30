import React, { useContext } from "react";
import "../../styles/newcontact.css"; 
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const NewContact = () => {

  const { actions } = useContext(Context);
  
  function handleAddContact (e) {
    e.preventDefault();
    let textbox = e.target.element;
    console.log(textbox);
  }

  return (

    <form className="form mx-auto">
      <div className="mb-3">
        <label for="name" className="form-label text-light">Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label for="phone" className="form-label text-light">Phone</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label for="email" className="form-label text-light">Email</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label for="adress" className="form-label text-light">adress</label>
        <input type="text" className="form-control" />
      </div>

      
      <div className="d-flex justify-content-between">
        <Link to="/" className="btn btn-success button2">Go back home</Link>
        <button onClick={handleAddContact} type="submit" className="btn btn-primary button1">Submit</button>
      </div>
    </form>


  )
}