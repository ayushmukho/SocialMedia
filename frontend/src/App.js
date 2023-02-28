import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Redux/Actions/userActions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Account from "./Components/Account/Account";
import NewPost from "./Components/NewPost/NewPost";
import Register from "./Components/Register/Register";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";

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
        <Route path="/account" element={isAuthenticated ? <Account /> : <Login />} />
        <Route path="/newpost" element={isAuthenticated ? <NewPost /> : <Login />} />
        <Route path="/register" element={isAuthenticated ? <Account /> : <Register />} />
        <Route path="/update/profile" element={isAuthenticated ? <UpdateProfile /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
