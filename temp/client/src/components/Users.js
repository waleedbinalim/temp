import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import UsersList from './UsersList'
import UserModal from './modals/UserModal'

const api = axios.create({baseURL: 'http://localhost:5000/'})

const Couriers = () => {
    let [user , setUser] = useState([])
    let [isOpen , setIsOpen] = useState(false)  //MODAL STATE
    let [edit, setEdit] = useState(null)
    let [toggle , setToggle] = useState(true)

    const toggler = () => {
        setToggle(!toggle)
    }

    let viewId = (e) => {
        console.log('viewId HITS')
        setIsOpen(true)
        user.forEach(person => {
            if(person._id === e.target.id){
                // console.log(person)
                setEdit(person)
            }
        })
    }

    let deleteId = (e) => {
        console.log('delete user BLOCK')
        let deleteURL = `/users/${e.target.id}` ;
        console.log(deleteURL)
        api.delete(deleteURL)
        api.get('/users/all').then(res => {
            setUser(res.data)
            console.log(res.data);
            console.log('GET REQUEST: USERS')
        })


    }


    useEffect(() => {
        // console.log(toggle)
        api.get('/users/all').then(res => {
            setUser(res.data)
        })
    },[])

    return(
        <div className="couriers-page">



            <div className="courier-image-wrapper">
                {isOpen ? <div className="modal-overlay" onClick={() => {setIsOpen(false)}}></div> : <></>}
                {isOpen ? <UserModal edit={edit} setEdit={setEdit} setIsOpen={setIsOpen} /> : <></>}


                <div className="register-button-container">
                <Link to = '/users/add'><button className="register-button">ADD USER</button></Link>
                </div>


                <div className="couriers-selector-panel">
                    <UsersList 
                        user={user} 
                        setUser={setUser} 
                        viewId={viewId} 
                        deleteId={deleteId} 
                        toggle={toggle}
                        setToggle={setToggle}
                        toggler={toggler}
                        api={api}
                    />
                </div>
            </div>
        </div>
    )
}

export default Couriers;