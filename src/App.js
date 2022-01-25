import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Login";
import FriendsList from "./Components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/friends" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;
