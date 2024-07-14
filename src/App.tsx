import { Route, Routes } from "react-router-dom";
import "./App.css";
import OTP from "./components/OTP";
import Success from "./components/Success";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="*" element={<OTP />} />
      <Route element={<PrivateRoute />}>
        <Route path="success" element={<Success />} />
      </Route>
    </Routes>
  );
}

export default App;
