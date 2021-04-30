import { useForm } from "react-hook-form";
import axios from 'axios'

const api = axios.create({baseURL: 'http://localhost:5000/'})

let headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*"
}


const OrderModal = ({orderEdit, setOrderEdit, setIsOpen}) => {

    const {register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        data = JSON.stringify(data);
        let putURL =('/orders/' + orderEdit._id)
        console.log(putURL);
        setIsOpen(false)
        api.put(putURL, data , {headers: headers})
      };
    
      return (
        <div className="modal-form">

            <form onSubmit={handleSubmit(onSubmit) }>

                <label>Deliver To</label>
                <input type="text" defaultValue={orderEdit.deliveredTo}
                {...register("deliveredTo", {maxLength: 20, pattern: /^[A-Za-z]+$/i })}
                />
                {errors?.name?.type === "maxLength" && (<p>First name cannot exceed 20 characters</p>)}
                {errors?.name?.type === "pattern" && (<p>Alphabetical characters only</p>)}

                <label>Delivered By</label>
                <input {...register("deliveredBy")}type="text" defaultValue={orderEdit.deliveredBy}/>
                <input type="submit" />
            </form>
        </div>

      );

}

export default OrderModal