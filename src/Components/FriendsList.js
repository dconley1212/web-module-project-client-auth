import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friendsList: [],
  };

  componentDidMount() {
    axiosWithAuth()
      .get("http://localhost:9000/api/friends")
      .then((resp) =>
        this.setState({
          friendsList: resp.data,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Friends List</h1>
        {this.state.friendsList.map((friend) => {
          return (
            <p key={friend.id}>
              {friend.name} {friend.email}
            </p>
          );
        })}
      </div>
    );
  }
}

export default FriendsList;
