import React from "react";
import axios from "axios";

class FriendsList extends React.Component {
  state = {
    friendsList: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
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
