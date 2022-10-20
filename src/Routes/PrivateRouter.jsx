import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Components/UserContext/UserContext";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const PrivateRouter = ({ children }) => {
  const { user } = useContext(AuthContext);
  //make condition for private Router
  if (user && user.uid) {
    return children;
  }

  return (
    <>
   
      
      <Navigate to="/signin"></Navigate>
    </>
  );
};

export default PrivateRouter;
