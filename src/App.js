
import { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/navbar"
import MyOrders from "./components/myorders"
import OrderInfo from './components/orderinfo';
import Home from './components/home'
import Login from './components/login'
import SignUp from './components/signup'
import Map from './components/map';
import onMyWay from './components/onMyWay';
import notification from './components/notification';
import dashBoard from './components/dashboard';
import orderDetails from './components/orderDetails';
import onTheWay from './components/onTheWay';
import { Order } from './components/orderDetails/order';
import { PreviousOrder } from './components/previousOrder/previousOrder';
import DroperPicker from './components/droperPicker';
import FinalDelivery from './components/finalDelivery/FinalDelivery';

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
        <button value="client" onClick={(event) => changeuser(event)} className="toggle_btn toggle_btn_left act">Client</button>
        <button value="dropper" onClick={(event) => changeuser(event)} className="toggle_btn toggle_btn_right">Dropper</button>
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
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/orderinfo" component={OrderInfo}/>
        <Route exact path="/map" component={Map}/>
        <Route exact path="/onmyway" component={onMyWay} />
        <Route exact path="/notification" component={notification} />
        <Route exact path="/dashboard" component={dashBoard} />
        <Route exact path="/order-details" component={orderDetails}/>
        <Route exact path="/ontheway" component={onTheWay} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/previous-order" component={PreviousOrder} />
        <Route exact path="/droppers" component={DroperPicker} />
        <Route exact path="/delivery" component={FinalDelivery} />
        
        {/* <MyOrders />
        </Route> */}

      </Router>

    </div>
  )
}

export default App;
