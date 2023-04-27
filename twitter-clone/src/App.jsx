import React from "react"
import CreateAccount from "./pages/createaccount/CreateAccount"
import {Routes, Route} from "react-router-dom"
import SignIn from "./pages/signIn/SignIn"
import Home from "./pages/home/Home"
import PrivateRoutes from "./components/PrivateRoutes"
import  Followers  from "./components/followers/Followers"
function App() {

  return (
    <div>
    {/* <Followers/> */}
      <Routes>
        <Route path="/" element={<PrivateRoutes><Home /></PrivateRoutes>}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<CreateAccount />}/>
      </Routes>
    </div>
  )
}

export default App
