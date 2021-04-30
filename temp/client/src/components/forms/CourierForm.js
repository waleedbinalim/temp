import { useForm } from "react-hook-form";
import axios from 'axios'

// const api = axios.create({
//   baseURL: 'http://localhost:5000/'
// })

let headers = {
  'Content-Type': 'application/json;charset=UTF-8',
  "Access-Control-Allow-Origin": "*"}


const CourierForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    // data = JSON.stringify(data);
    // console.log(data)
    // console.log(JSON.stringify(data));
    // data = JSON.stringify(data)
    axios.post('http://localhost:5000/users/add', data , {headers: headers})
    window.location.href = "http://localhost:3000/users";
  };

  return (
    <div className="other-form">
    <form onSubmit={handleSubmit(onSubmit)}>


{/* NAME */}
      
      <label>Name</label>
      <input
        {...register("name", {required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })}
      />
      {errors?.name?.type === "required" && <p>This field is required</p>}
      {errors?.name?.type === "maxLength" && (<p>First name cannot exceed 20 characters</p>)}
      {errors?.name?.type === "pattern" && (<p>Alphabetical characters only</p>)}


      {/* <label>I am a</label>
      <select {...register("role")}>
        <option value="courier">courier</option>
        <option value="customer">customer</option>
      </select> */}
 
      <label>Email</label>
      <input {...register("email")} />
 
      {/* <label>Password</label>
      <input type="password" {...register("password")} /> */}
 
      <label>City</label>
      <input {...register("city")} />


      <label>Address</label>
      <input {...register("address")} />
 
      <label>Phone</label>
      <input {...register("phone")} />

      <input className="form-submit-button" type="submit" />
    </form>
    </div>
  );
}

export default CourierForm