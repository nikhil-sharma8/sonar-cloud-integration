import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CreateData } from "./pages/CreateData";
import { ReadData } from "./pages/ReadData";
import NotFound from "./pages/NotFound";
import DeleteData from "./pages/DeleteData";
import UpdateData from "./pages/UpdateData";
import PrivateRoute from "./components/PrivateRoute";
import { LoginButton } from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <ReadData />
            </PrivateRoute>
          }
        />
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreateData />
            </PrivateRoute>
          }
        />
        <Route
          path="/update/:id"
          element={
            <PrivateRoute>
              <UpdateData />
            </PrivateRoute>
          }
        />
        <Route
          path="/delete"
          element={
            <PrivateRoute>
              <DeleteData />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <NotFound />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginButton />} />
      </Routes>
    </>
  );
}

export default App;
