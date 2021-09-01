
import { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/navbar"
import MyOrders from "./components/myorders"
import OrderInfo from './components/orderinfo';
import Login from './components/login'
import SignUp from './components/signup'
function App() {

  const [user, setuser] = useState("client")

  function changeuser(event) {
    event.preventDefault();
    setuser(event.target.value)

    document.querySelector(".act").classList.remove("act")
    event.target.classList.add("act")
  }

  return (
    <div>
      <Navbar user={user} />
      <div className="toggle">
        <button value="client" onClick={(event) => changeuser(event)} className="toggle_btn act">Client</button>
        <button value="dropper" onClick={(event) => changeuser(event)} className="toggle_btn">Dropper</button>
      </div>
      {/* <div className="recent_orders">
        <div className="top">
          <p>Current Orders</p>
        </div>
        <div className="order">
          Order 1
        </div>
      </div> */}

      <Router>
        <Route exact path="/myorders" component={MyOrders} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/orderinfo" component={OrderInfo}/>
 
        {/* <MyOrders />
        </Route> */}

      </Router>

    </div>
  )
}

export default App;
