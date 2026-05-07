import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { useAuth } from "./contexts/AuthContext";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
};

const DashboardPage: React.FC = () => <div>Dashboard - Welcome!</div>;

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
