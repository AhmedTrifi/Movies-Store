import "./App.css";
import AddMovie from "./components/AddMovie";
import AllMovies from "./components/AllMovies";
 import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateMovie from "./components/UpdateMovie";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white" style={{ height: "100vh" }}>
        <Routes>
        <Route index element={<Signin />} />

          <Route path="/home" element={<AllMovies />} />
          <Route path="/add" element={<AddMovie />} />
          <Route path="/:id" element={<UpdateMovie />} />
          <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
