import axios from "axios";
import React from "react";

class AddFriends extends React.Component {
  state = {
    name: "",
    email: "",
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/friends", {
        authorization: localStorage.getItem("token"),
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Add Friend</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Friend Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Friend Email
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddFriends;
