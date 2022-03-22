import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CursosPage from "./pages/CursosPage";
import CursoPage from "./pages/CursoPage";
import "./public/style.css";

ReactDOM.render(
  <BrowserRouter>
    <Menu />
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cursos" element={<CursosPage />} />
        <Route path="/cursos/:id" element={<CursoPage />} />
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
