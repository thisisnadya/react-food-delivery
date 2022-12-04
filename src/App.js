import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Favorites from "./pages/Favorites";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/type/:type" element={<Category />} />
        <Route path="/detail/:id" element={<Detail />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
