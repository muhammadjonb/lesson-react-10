import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "../router/Menu";
import Home from "../router/Home";
import Students from "../router/Students";
import NotFound from "../router/NotFound";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="first_menu">
        <Menu />
      </div>
      <div className="rigth">
        <nav className="navbar">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/students" element={<Students />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </nav>
      </div>
    </header>
  );
};

export default Header;
