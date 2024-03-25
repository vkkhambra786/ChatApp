// import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";

import { useAuthContext } from "./context/AuthContext";
function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

// import Login from "./pages/login/Login";
// import SignUp from "./pages/signup/SignUp";
// import Home from "./pages/Home/Home";
// import { Toaster } from "react-hot-toast";
// import { Route, Routes } from "react-router-dom";
// function App() {
//   return (
//     <div className="p-4 h-screen flex items-center justify-center">
//       {/* <Login /> */}
//       {/* <SignUp /> */}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>
//       <Toaster />
//     </div>
//   );
// }

// export default App;
