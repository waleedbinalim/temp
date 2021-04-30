import { useEffect } from "react";
import moment from 'moment'

const OrdersList = ({order, setOrder , viewId, deleteId , api}) => {

    return(
        <div>
                {order && order.length &&
                    order.map((parcel) => {
                        if(parcel.isActive  == true
                            // || parcel.isActive != true
                        )
                            {
                            return(
                            <div key={parcel._id} id={parcel._id} className="courier-block">
                                <h2 className="parcel-name">ID: {parcel._id}</h2>
                                <p className="parcel-details">Deliver To: {parcel.deliveredTo}</p>
                                <p className="parcel-details">Deliver By: {parcel.deliveredBy}</p>
                                <p className="parcel-details">Status: {parcel.status}</p>
                                <p className="parcel-details">Active: {parcel.isActive ? 'saved' : 'deleted'}</p>
                                <p className="parcel-details">Date: {moment(parcel.createdAt).format('Do MMMM YYYY, h:mm a')}</p>

                                <div className="courier-block-buttons-group">
                                    <button id={parcel._id} className="edit-button courier-block-button" onClick={(e) => viewId(e)}>
                                        <a id={parcel._id} href="#">EDIT</a>
                                    </button>
                                    <button className="delete-button courier-block-button" id={parcel._id} 
                                        onClick={(e) => viewId(e)}
                                        onClick={(e) => deleteId(e)}
                                    >
                                        DELETE
                                    </button>
                                </div>
                            </div>
                            )
                        }
                    })
                }
        </div>
    )
}

export default OrdersList;