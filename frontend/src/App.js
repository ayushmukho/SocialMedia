import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./Redux/Actions/userActions";

function App() {
  //handlers
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser())
  }, [])

  //jsx
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
