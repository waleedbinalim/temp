// import { useState, useEffect } from "react";

const UsersList = ({user, setUser , viewId, deleteId , toggle , setToggle, toggler, api
    }) => {



    return(
        <div>
                {user && user.length &&
                    user.map((person) => {
                        if(person.isActive 
                            // || person.isActive !== true
                        )
                        {
                            return(
                            <div key={person._id} id={person._id} className="courier-block">
                                <h2 className="person-name">{person.name}</h2>
                                <p className="person-details">email: {person.email}</p>
                                <br/>
                                <p className="person-details">City: {person.city}</p>
                                <p className="person-details">Address: {person.address}</p>
                                <p className="person-details">Phone: {person.phone}</p>
                                <p className="person-details">Status: {person.isActive ? 'Available' : 'Inactive'}</p>

                                <div className="courier-block-buttons-group">
                                    <button id={person._id} className="edit-button courier-block-button" 
                                        onClick={(e) => {viewId(e)} }
                                    >
                                        <a id={person._id}>EDIT</a>
                                    </button>
                                    <button className="delete-button courier-block-button" id={person._id}
                                        onClick={(e) => deleteId(e)}
                                    >
                                        DELETE
                                    </button>
                                </div>
                            </div>
                            )
                        }
                        return(<></>)
                    })
                }
        </div>
    )
}

export default UsersList;