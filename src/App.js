import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Complaint from "./Components/Complaint";
import AllComplaints from "./Components/AllComplaints";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/complaint" element={<Complaint />}></Route>
        <Route path="/allcomplaints" element={<AllComplaints />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
