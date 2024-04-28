import React from "react";
import Welcome from "./routes/Welcome";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Dashboard from "./routes/Dashboard";
import GramaNiladhari from "./routes/GramaNiladhari";
import UserGuide from "./routes/UserGuide";
import Feedback from "./routes/Feedback";
import Police from "./routes/Police";
import OnlineSupport from "./routes/OnlineSupport";
import Requests from "./routes/Requests";
import EditProfile from "./routes/EditProfile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard/grama-niladhari"
            element={<GramaNiladhari />}
          />
          <Route path="/user-guide" element={<UserGuide />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/dashboard/police" element={<Police />} />
          <Route path="/online-support" element={<OnlineSupport />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/dashboard/edit-profile" element={<EditProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
