// import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Courses.css"

function Courses() {

     // const {course, setCourse} = useState();
     function whichCourse(e) {
          localStorage.setItem('Imarticus_course', `${e.target.innerText}`);
     }
     return (
          <div className="mainbx">
               {/* <img src={ } alt="its logo"></img> */}
               <h1>Congratulations..!</h1>
               <h4>Take advantage of incredible offers with an Imarticus Job Assured Program.</h4>
               {/* <h4>Choose any one from bellow</h4> */}

               <div className="courses_list">
                    <ul>
                         <li onClick={whichCourse}><Link to={{
                              pathname: "/form",

                         }}>
                              Certified Full Stack Developer Pro </Link> </li>
                         <li onClick={whichCourse}><Link to={{
                              pathname: "/form",

                         }}>Certified Investment Banking Operations Professional </Link></li>
                         <li onClick={whichCourse}><Link to={{
                              pathname: "/form",

                         }}>Postgraduate Program In Banking & Finanace </Link></li>
                         <li onClick={whichCourse}><Link to={{
                              pathname: "/form",

                         }}>Postgraduate Program In Machine Learning & A.I. </Link></li>
                         <li onClick={whichCourse}><Link to={{
                              pathname: "/form",

                         }}>Postgraduate Program In Data Science & Analytics </Link></li>
                         <li onClick={whichCourse}><Link to={{
                              pathname: "/form",

                         }}>Postgraduate Program In Cybersercurity </Link></li>
                         <li onClick={whichCourse}><Link to={{
                              pathname: "/form",

                         }}>Postgraduate Program in Digital Marketing </Link></li>
                    </ul>
               </div>

          </div>
     )
}

export default Courses;