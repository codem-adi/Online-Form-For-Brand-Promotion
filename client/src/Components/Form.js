import { useEffect, useState } from 'react';
import '../css/form.css'
import { useNavigate } from "react-router-dom";
// useLocation
function Form() {

     const initiaState = { username: "", email: "", phone: "", course: localStorage.getItem('Imarticus_course'), center: "" }
     const [formValues, setFormValues] = useState(initiaState);
     const [formErrors, setFormErrors] = useState({});
     const [isSubmit, setIsSubmit] = useState(false);
     const navigate = useNavigate();
     const [selectedCenter, setSelectedCenter] = useState(false)
     // const [userError, setIsError] = useState(false);

     //sending the data to the server
     function postDetails(data) {
          try {
               fetch('http://127.0.0.1:8000/details', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
               })
                    .then((resp) => { return resp.json() })
                    .then((offer) => {
                         navigate("/final" ,{ state: { 'message': "Failed to submit form" } });
                         //here we are
                         
                    })
                    .catch((error) => {
                         navigate("/")
                    });
          }
          catch {

          }
     }

     useEffect(() => {
          if (Object.keys(formErrors).length === 0 && isSubmit) {
               // initiaState.course = localStorage.getItem('Imarticus_course');
               postDetails(formValues);

          }
     }, [formErrors])

     function handleChange(e) {
          const { name, value } = e.target
          setFormValues({ ...formValues, [name]: value })

     }

     function handleSubmit(e) {
          e.preventDefault();

          if (localStorage.getItem('Imarticus_auth')) {
               navigate('/final')
          }
          else {

               setFormErrors(validate(formValues));
               setIsSubmit(true)
          }

     }


     const validate = (values) => {

          const errors = {};

          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

          if (!values.username) {
               errors.username = "Name is required";
          } else if (values.username.length < 3) {
               errors.username = "Name should be more then 3 letters"
          }
          if (!values.email) {
               errors.email = "Email is required";
          } else if (!regex.test(values.email)) {
               errors.email = "Not a valid email"
          }
          if (!values.phone) {
               errors.phone = "Phone Number is required";
          } else if (values.phone.length < 10) {
               errors.phone = "Phone number must be 10 digit"
          }
          else if (values.phone.length > 10) {
               errors.phone = "Phone number can't be more then 10 digit"
          }

          if (selectedCenter === false) {
               errors.center = "select any one of the above center"
          }
          return errors;
     }
     function select_center(e) {
          // e.preventDefault();
          setSelectedCenter(true);
          document.getElementsByClassName("dropdown-toggle")[0].innerText = e.target.innerText;
          formValues.center = e.target.innerText
     }

     return (
          <div className="details">


               {/* {Object.keys(formErrors).length === 0 && isSubmit ? <Congratulations/>:""} */}
               <form className='details_form' onSubmit={handleSubmit}>
                    <div className="mb-3">
                         <label className="form-label">Full Name</label>
                         <input type="text" onChange={handleChange} className="form-control" id="InputName" name="username" value={formValues.username} />

                    </div>
                    <h3>{formErrors.username}</h3>
                    <div className="mb-3">
                         <label className="form-label">Email address</label>
                         <input type="email" onChange={handleChange} className="form-control" name="email" id="InputEmail" value={formValues.email} />
                    </div>
                    <h3>{formErrors.email}</h3>
                    <div className="mb-3">
                         <label className="form-label">Phone Number</label>
                         <input type="number" onChange={handleChange} className="form-control" name="phone" id="InputNumber" value={formValues.phone}></input>
                    </div>
                    <h3>{formErrors.phone}</h3>
                    <div className="avilable_centers_container dropdown mb-3">
                         <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Select Nearest Branch
                         </button>
                         <ul className="avilable_centers dropdown-menu">
                              <li className="dropdown-item" onClick={select_center} >Mumbai</li>
                              <li className="dropdown-item" onClick={select_center} >Thane</li>
                              <li className="dropdown-item" onClick={select_center} >Pune</li>
                              <li className="dropdown-item" onClick={select_center} >Ahmedabad</li>
                              <li className="dropdown-item" onClick={select_center} >Jaipur</li>
                              <li className="dropdown-item" onClick={select_center} >Delhi</li>
                              <li className="dropdown-item" onClick={select_center} >Gurgaon</li>
                              <li className="dropdown-item" onClick={select_center} >Noida</li>
                              <li className="dropdown-item" onClick={select_center} >Patna</li>
                              <li className="dropdown-item" onClick={select_center} >Lucknow</li>
                              <li className="dropdown-item" onClick={select_center} >Banglore</li>
                              <li className="dropdown-item" onClick={select_center} >Chennai</li>
                              <li className="dropdown-item" onClick={select_center} >Hyderabad</li>
                              <li className="dropdown-item" onClick={select_center} >Coimbatore</li>
                              <li className="dropdown-item" onClick={select_center} >Cochin</li>
                         </ul>
                    </div>
                    <h3>{formErrors.center}</h3>
                    <div id="emailHelp" className="form-text mb-3">{localStorage.getItem('Imarticus_course')}</div>

                    <button type="submit" className="btn form_btn">submit</button>
                    {/* onClick={formSubmit} */}
                    {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                    {/* <Link to={'/final'}>Submit</Link> */}
                    {/* onClick={formSubmit} */}
                    {/* type="submit" */}
               </form>
          </div>
     );
}


export default Form;