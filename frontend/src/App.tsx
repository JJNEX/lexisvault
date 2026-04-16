import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import Compromissos from "./pages/Compromissos";
import PrivateRoute from "./routes/PrivateRoute";
import { useAuth } from "./contexts/AuthContext";



function App() {
  const { loading } = useAuth();

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <BrowserRouter>
      <Navbar /> {/* ✅ AGORA SIM */}

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
  path="/compromissos"
  element={
    <PrivateRoute>
      <Compromissos />
    </PrivateRoute>
  }
/>

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;









//DOIS

/*import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

import AppRoutes from "./routes/AppRoutes.tsx";
import Navbar from "./components/Navbar";

import PrivateRoute from "./routes/PrivateRoute";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { loading } = useAuth();

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />*/

        {/*fallback */}
        /*<Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;*/











