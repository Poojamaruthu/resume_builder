import { useState } from "react";
import "./AuthModel.css";

const AuthModal = ({ show, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // toggle state

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>✖</button>

        <h2 className="modal-title">{isLogin ? "Sign In" : "Sign Up"}</h2>

        <form className="auth-form">
          {!isLogin && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {!isLogin && (
            <input type="password" placeholder="Confirm Password" required />
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="switch-text">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <span className="link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
