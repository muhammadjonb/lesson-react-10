import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import { Provider } from "react-redux";
import store from "./app/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    </div>
  );
};

export default App;
