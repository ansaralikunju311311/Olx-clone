
import Home from "./Components/Home/Home"
import Login from "./Components/Login/Login"
import SignUp from "./Components/SignUp/SignUp"
import { Route,Routes } from "react-router-dom"
import LoginNavBar from "./Components/LoginNavBar/LoginNavBar"
const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
     <Route path="/login" element={<Login />} /> 
     <Route path="/" element={<LoginNavBar />} />
    </Routes>
    
  
    </div>
  )
}
export default App
