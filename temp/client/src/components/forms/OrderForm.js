import { useForm } from "react-hook-form";
import axios from 'axios'

const api = axios.create({baseURL: 'http://localhost:5000/'})

let headers = {
  'Content-Type': 'application/json;charset=UTF-8',
  "Access-Control-Allow-Origin": "*"}


const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    // data = JSON.stringify(data);
    // console.log(data)
    // console.log(JSON.stringify(data));
    data = JSON.stringify(data)
    api.post('/orders/add', data , {headers: headers})
    window.location.href = "http://localhost:3000/orders";
  };

  return (

    <div className="other-form">
    <form onSubmit={handleSubmit(onSubmit)}>


{/* NAME */}
      <label>Deliver To</label>
      <input
        {...register("deliveredTo", {required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })}
      />
      {errors?.deliveredTo?.type === "required" && <p>This field is required</p>}
      {errors?.deliveredTo?.type === "maxLength" && (<p>First name cannot exceed 20 characters</p>)}
      {errors?.deliveredTo?.type === "pattern" && (<p>Alphabetical characters only</p>)}
 
      <label>Delivered By</label>
      <input {...register("deliveredBy")} />

      <input className="form-submit-button" type="submit" />
    </form>
    </div>
  );
}

export default OrderForm