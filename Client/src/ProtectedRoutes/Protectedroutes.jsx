import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Protectedroutes = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      toast.error("Token not found");
      navigate("/login");
    }
  });
  return (
    <>
      <ToastContainer />
      { token ? children : null}
    </>
  );
};

export default Protectedroutes;
