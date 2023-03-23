import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom'
import {Signup} from './components/signup'
import {Login} from './components/login'
import { AdminRegister } from './components/adminregister';
import { AdminLogin } from './components/adminlogin';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/adminregister" element={<AdminRegister/>}></Route>
        <Route path="/adminlogin" element={<AdminLogin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
