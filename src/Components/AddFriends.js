import axiosWithAuth from "../utils/axiosWithAuth";
import React from "react";

class AddFriends extends React.Component {
  state = {
    name: "",
    age: "",
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
    axiosWithAuth()
      .post("http://localhost:9000/api/friends", { ...this.state })
      .then(
        (resp) => this.setState(resp.data),
        this.props.history.push("/friends")
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Add Friend</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Friend Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            {" "}
            Age:
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Friend Email:
            <input
              type="email"
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
