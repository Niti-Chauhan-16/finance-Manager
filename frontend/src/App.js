import  './componentcss/style.css';
import Dashboard from './components/Dashboard'
import Landing from './components/Landing';
import { Routes,Route } from 'react-router-dom';

import Login from './components/Login';
//import Dashboard from './Mycomponent/Dashboard';
//import NewDash from './Mycomponent/NewDash';
function App() {
  return (
    <>
    
    <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/Dashboard' element={<Dashboard/>}/>
        {/* //<Route exact path='/dashboard' element={<Dashboard/>}/> */}
    </Routes>
    
   
   
 
    </>
  );
}

export default App;
