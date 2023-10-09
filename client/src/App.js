import { Routes, Route } from "react-router-dom";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import Profile from "./pages/user/Profile";
import HomePage from "./pages/HomePage";
// import Chat from "./pages/Chat/Chat";
import ChatContainer from "./components/ChatContainer/ChatContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/chat" element={<ChatContainer />} />
      </Routes>
    </>
  );
}

export default App;
