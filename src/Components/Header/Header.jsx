import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../UserContext/UserContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const notify = () =>{
    if(!user){
      toast("Please login")
    }
  };
  return (
    <div className="navbar bg-primary text-primary-content">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        Authentication
      </Link>
      <div className="">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
       Home
      </Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/order" onClick={notify}>
          Order
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/signin">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/signup">
          Register
        </Link>
        {user?.email && <span>Welcome, {user.email}</span>}
        {
          user?.email ? <button className="btn btn-ghost" onClick={logOut}> Log out</button> : <Link to="/signin">Login</Link>
        }
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Header;
