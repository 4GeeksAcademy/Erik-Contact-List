import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/contacts.css";
import { Link } from "react-router-dom";


export const Contacts = () => {

    const  { store } = useContext(Context)
    console.log(store)
    return (
        <div className="text-center mt-5 container">
            <h1 className="text-light mb-5">Contacts</h1>
            <ul>
                {

                store.contacts.map((item) => (
                    <li className="text-light mb-4" key={item}>
                        {item}

                    </li>
                ))

                }
            </ul>
            <Link to="/new-contact" className="btn btn-light">
            Add new contact
            </Link>
           
        </div>
    )
};
