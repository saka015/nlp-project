import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nothing from "./pages/Nothing";

const App = () => {
  return (
    <div className="bg-[#070F2B] min-h-[100vh]">
    
      <Routes>
<Route exact path='/' element={<Home/>}/>
<Route exact path='/loginuser' element={<Login/>}/>
<Route exact path='/createuser' element={<Register/>}/>
<Route exact path='*' element={<Nothing/>}/>
      </Routes>
    </div>
  );
};

export default App;
