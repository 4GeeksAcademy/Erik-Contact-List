import React, { useContext } from "react";
import { Context } from "../store/appContext";



export const Contacts = () => {

    const  { store } = useContext(Context)
    console.log(store)
    return (
        <div>
            <h1>Contacts</h1>
            <ul>
                {

                store.contacts.map((item) => (
                    <li key={item}>
                        {item}

                    </li>
                ))

                }
            </ul>
        </div>
    )
};

