import { useForm } from "react-hook-form";
import axios from 'axios'

const api = axios.create({baseURL: 'http://localhost:5000/'})

let headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*"
}


const UserModal = ({edit, setEdit, setIsOpen}) => {

    const {register, handleSubmit, formState: { errors } } = useForm();
    
      const onSubmit = (data) => {
        data = JSON.stringify(data);
        let putURL =('/users/' + edit._id)
        console.log(putURL);
        setIsOpen(false)
        api.put(putURL, data , {headers: headers})
      };
    
      return (
        <div className="modal-form">

            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Name</label>
                <input type="text" defaultValue={edit.name}
                {...register("name", {maxLength: 20, pattern: /^[A-Za-z]+$/i })}
                />
                {errors?.name?.type === "maxLength" && (<p>First name cannot exceed 20 characters</p>)}
                {errors?.name?.type === "pattern" && (<p>Alphabetical characters only</p>)}

                <label>Email</label>
                <input {...register("email")}type="text" defaultValue={edit.email} />

                <label>City</label>
                <input {...register("city")}type="text" defaultValue={edit.city} />


                <label>Address</label>
                <input {...register("address")}type="text" defaultValue={edit.address} />

                <label>Phone</label>
                <input {...register("phone")}type="text" defaultValue={edit.phone}/>

                <input type="submit" />
            </form>

        </div>

      );

}

export default UserModal