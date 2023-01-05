

import WelcomePage from './Components/WelcomePage';
import Courses from './Components/Courses';
import Form from './Components/Form'
import ForOfor from './Components/404';
import Congratulations from './Components/Congratulations'
import './css/App.css';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './Assits/Imarticus_learning_logo.png'

// 0f5644
function App() {

 
  
  
  return (
    <div className="App">
      <Link to={"/"} className="link">
        <div className='top_bar'>
          <img className='logoImage' src={logo} alt="logo" />
        </div>
      </Link>
      <Routes>
        
        <Route path='/' element={<WelcomePage />} />
        <Route path='/course' element={<Courses />} />
        <Route path='/form' element={<Form />} />
        <Route path='/final' element={<Congratulations />} />
        <Route path="/*" element={<ForOfor/>} />
      </Routes>
    </div>
  );
}

export default App;
