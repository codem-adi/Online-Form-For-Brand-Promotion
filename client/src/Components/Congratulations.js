// few corection have to be done in fetching the api


// import { useEffect } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../css/congratulations.css'




function Congratulations() {

     const navigate = useNavigate();

     useEffect(() => {
          getDiscount();
     }, [])
     const location = useLocation();
     // const { data } = state || {};

     let getDiscount = () => {

          if (localStorage.getItem("Imarticus_Code")) {
               document.getElementById('main_code').innerText = localStorage.getItem('Imarticus_Code').slice(0, 10);
               document.querySelector("#offer_amount > span").innerText = localStorage.getItem('Imarticus_Code').slice(10);
               // navigator.clipboard.writeText(localStorage.getItem('Imarticus_Code').slice(0, 10));
          }
          else {

               try {
                    fetch('http://45.132.241.86/api/discount', {
                         method: 'POST',
                         headers: {
                              'Content-Type': 'application/json',
                         },
                         body: JSON.stringify({ course: localStorage.getItem('Imarticus_course') })
                    })
                         .then((response) => response.json())
                         .then((data) => {

                              document.querySelector("#offer_amount > span").innerText = data.discount;
                              localStorage.setItem('Imarticus_Code', data.referalCode + data.discount);
                              // document.querySelector("#main_code").innerText = data.referalCode
                         })
                         .catch((error) => {
                              navigate('/');
                         });
                    localStorage.setItem("Imarticus_auth", "true")
               }
               catch {

               }
               // alert("clicked this end", localStorage.getItem("Imarticus_Code"));
          }

     }
     return (
          <div className="mainbx">

               <h1>Hurry..!</h1>
               <h4>You have sucessfully availd the offer</h4>
               <div className="code_box">
                    <h1 id="offer_amount"><span>-----</span><sup>off</sup></h1>
                    <p></p>
                    <h6 onClick={getDiscount} id="main_code">Here is your code</h6>

               </div>
               <h5>You will hear from us soon</h5>

          </div>
     )


}
export default Congratulations;