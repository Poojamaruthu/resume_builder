// import { useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleMode = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle("dark-mode");
//   };

//   return (
//     <nav className="navbar">
//       <h2 className="logo">Resume Builder</h2>
//       <div className="navbar-actions">
//         <button onClick={toggleMode} className="mode-btn">
//           {darkMode ? "🌙" : "☀️"}
//         </button>
//         <button className="login-btn">Sign In</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onOpenModal }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Resume Builder</h2>
      <div className="navbar-actions">
        <button onClick={toggleMode} className="mode-btn">
          {darkMode ? "🌙" : "☀️"}
        </button>
        <button onClick={onOpenModal} className="login-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
