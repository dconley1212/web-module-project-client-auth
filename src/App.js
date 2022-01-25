import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Components/Login";
import FriendsList from "./Components/FriendsList";
import AddFriends from "./Components/AddFriends";
import LogOut from "./Components/LogOut";

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
          <Link to="/">LOGOUT</Link>
          <br />
        </ul>
        <Switch>
          <Route path="/friends/add" component={AddFriends} />
          <Route path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
