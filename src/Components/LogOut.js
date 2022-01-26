import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const LogOut = () => {
  const { push } = useHistory();
  useEffect(() => {
    axiosWithAuth()
      .post("http://localhost:9000/api/logout")
      .then((resp) => {
        localStorage.removeItem("token");
        push("/login");
      })
      .catch((err) => console.log(err));
  }, []);

  return <div></div>;
};

export default LogOut;
