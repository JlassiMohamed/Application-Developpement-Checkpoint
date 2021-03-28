import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../JS/actions/user";
import userReducer from "../../JS/reducers/user";
import "./Navbar.css";
const Navbar = () => {
  const user = useSelector((state) => state.userReducer.user);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();
  return (
    <header>
      <Link to="/">
        <h2>ONLINE DELIVERY FOOD</h2>
      </Link>
      {isAuth ? (
        <div className="welcome">
          hello, {user.name}
          <Link to="/" onClick={() => dispatch(logout())}>
            {" "}
            <a href="#" className="btn-area">
              Logout
            </a>
          </Link>
        </div>
      ) : (
        <div className="btns">
          <Link to="/signup">
            {" "}
            <a href="#" className="btn-area">
              SignUp
            </a>
          </Link>

          <Link to="/signin">
            <a href="#" className="btn-area">
              SignIn
            </a>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
