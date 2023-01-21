import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Redux/Actions/userActions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

function App() {
  //handlers
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  //jsx
  return (
    <Router>
      {isAuthenticated && <Header />}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
