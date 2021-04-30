import { useState ,useEffect } from "react"
import {Link} from 'react-router-dom'
import axios from 'axios'
import OrdersList from './OrdersList'
import OrderModal from './modals/OrderModal'

const api = axios.create({baseURL: 'http://localhost:5000/'})

const Orders = () => {
    let [order, setOrder] = useState([])
    let [isOpen , setIsOpen] = useState(false)  //MODAL STATE
    let [orderEdit, setOrderEdit] = useState(null)

    let viewId = (e) => {
        // console.log('viewId HITS')
        setIsOpen(true)
        order.forEach(parcel => {
            if(parcel._id === e.target.id){
                // console.log(person)
                setOrderEdit(parcel)
                console.log(orderEdit)
            }
        })
    }

    let deleteId = (e) => {
        console.log('delete orders BLOCK')
        const deleteURL = `/orders/${e.target.id}` ;
        console.log(deleteURL)
        api.delete(deleteURL)
            .then(() => {
                api.get('/orders/all').then(res => {
                        setOrder(res.data)
                        console.log('GET REQUEST: ORDERS')
                })
            })

    }

    useEffect(() => {
        api.get('/orders/all').then(res => {
            setOrder(res.data)
        })
    },[])

    return(
        <div className="couriers-page">
            <div className="courier-image-wrapper">
                {isOpen ? <div className="modal-overlay" onClick={() => {setIsOpen(false)}}></div> : <></>}
                {isOpen ? <OrderModal orderEdit={orderEdit} setOrderEdit={setOrderEdit} setIsOpen={setIsOpen}/> : <></>}

                <div className="register-button-container">
                    <Link to = '/orders/add'><button className="register-button">ADD ORDER</button></Link>
                </div>
                <div className="couriers-selector-panel">
                    <OrdersList order={order} setOrder={setOrder} viewId={viewId} deleteId={deleteId} api={api}/>
                </div>

            </div>
        </div>
    )
}

export default Orders;