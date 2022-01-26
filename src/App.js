import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Components/Login";
import FriendsList from "./Components/FriendsList";
import AddFriends from "./Components/AddFriends";
import Logout from "./Components/Logout";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>FRIENDS DATABASE</h2>
        <ul>
          <Link to="/login">LOGIN</Link>
          <br />
          <Link to="/friends">FRIENDLIST</Link>
          <br />
          <Link to="/friends/add">ADDFRIEND</Link>
          <br />
          <Link to="/logout">LOGOUT</Link>
          <br />
        </ul>
        <Switch>
          <Route path="/logout" component={Logout} />
          <PrivateRoute path="/friends/add" component={AddFriends} />
          <PrivateRoute path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
