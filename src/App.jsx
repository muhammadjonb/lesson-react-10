import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
      </Router>
    </div>
  );
};

export default App;
