import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/contacts.css";
import { Link } from "react-router-dom";


export const Contacts = () => {


    const { store } = useContext(Context)

    return (
        <div className=" mt-5 container">
            <h1 className="text-center text-light mb-5">Contacts</h1>

            {

                store.contacts.map((contact) => (
                    <div className="d-flex justify-content-between contact mx-auto" key={contact}>
                           <div className="d-flex">
                            <div className="user my-auto"><i className="fa-solid fa-user user1"></i></div>
                            <div className="d-block contacts">
                                <p className="mb-2"><h4>{contact.name}</h4></p>
                                <p className="mb-2"><i class="fa-solid fa-phone"></i> +34 {contact.phone}</p>
                                <p className="mb-2"><i class="fa-solid fa-envelope"></i> {contact.email}</p>
                                <p><i className="mb-2 fa-solid fa-location-dot"></i> {contact.address}</p>
                            </div>
                            </div>
                        <div>
                            <button className="btn btn-dark border border-warning m-1" onClick={() => { }}><i class="fa-solid fa-pen"></i></button>
                            <button className="btn btn-dark border border-danger m-1" onClick={() => { }}><i class="fa-solid fa-x"></i></button>
                        </div>

                    </div>
                ))

            }
            <div className="text-center">
                <Link to="/new-contact" className="text-center btn btn-light mt-3">
                    Add new contact
                </Link>
            </div>
        </div>
    )
};
