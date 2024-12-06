import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={< Main />} />
      </Routes>
    </BrowserRouter>
  );
}

