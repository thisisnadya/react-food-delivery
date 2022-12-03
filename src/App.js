import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Favorites from "./pages/Favorites";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/type/:type" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
