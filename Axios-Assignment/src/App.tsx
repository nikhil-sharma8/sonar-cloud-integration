import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { CreateData } from "./pages/CreateData";
import { ReadData } from "./pages/ReadData";
import NotFound from "./pages/NotFound";
import DeleteData from "./pages/DeleteData";
import UpdateData from "./pages/UpdateData";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ReadData />} />
        <Route path="/create" element={<CreateData />} />
        <Route path="/update/:id" element={<UpdateData />} />
        <Route path="/delete" element={<DeleteData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
