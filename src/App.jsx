import { useState } from "react";
import "./App.css";
import Login from "./Login";
import Main from "./index1";
function App() {
   const [login,setlogin] = useState(false);
   return(
      <div className=" h-screen w-full flex flex-col items-center ">
         {
            login ? <Main/> : <Login login={login} setlogin = {setlogin}></Login>
         }
      </div>
   )   
}

export default App;
