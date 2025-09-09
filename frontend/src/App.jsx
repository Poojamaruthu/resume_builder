// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import "./App.css"; // ✅ import styles

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Navbar />
//         <div className="page-wrapper">
//           <Routes>
//             <Route path="/" element={<Home />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;








import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AuthModal from "./components/AuthModel";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <Navbar onOpenModal={() => setShowModal(true)} />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home onOpenModal={() => setShowModal(true)} />} />
        </Routes>
      </div>
      <AuthModal show={showModal} onClose={() => setShowModal(false)} />
    </Router>
  );
}

export default App;
