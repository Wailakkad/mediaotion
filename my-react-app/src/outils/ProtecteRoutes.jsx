import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  console.log("Token:", token);
  if (!token) {
    // Redirect to login if no token
    return <Navigate to="/AdminLogin" replace />;
  }
  return children;
};

export default ProtectedRoute;