import React from "react";
import "./Login.css";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";

const Login = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="login-container">
      <div className="Login-Form">
        <div>
          <button className="closeButton" onClick={closeModal}>
            <CloseIcon />
          </button>
        </div>
        <div>
          <h3>Login</h3>
        </div>

        <div className="Input-login">
          <span>
            <PersonIcon />
          </span>
          <input type="email" name="email" placeholder="Enter your Email" />
        </div>
        <div className="Input-login">
          <span>
            <LockIcon />
          </span>
          <input
            type="email"
            name="password"
            placeholder="Enter your Password"
          />
          <p>
            <Link>Forget Password?</Link>
          </p>
        </div>
        <button className="form-button">Login</button>
        <div className="loginWay2">
          <h4>Or Sign In Using</h4>
          <div className="social-media-login">
            <button className="Media-icons-button">
              <FacebookIcon />
            </button>
            <button className="Media-icons-button">
              <XIcon />
            </button>
            <button className="Media-icons-button">
              <GoogleIcon />
            </button>
          </div>
        </div>
        <p className="SignUpUrl">
          Don't Have An Account?<Link>SignUp</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
