

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home1 from './component/Home1';
import Register from './component/register';
import Loginapp from './component/login';

function App() {
  return (
 
       <Router>
        <Routes>
          <Route exact path='/' element={<Home1/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/login' element={<Loginapp/>}/>
        </Routes>          
        </Router>
  );
}

export default App;
