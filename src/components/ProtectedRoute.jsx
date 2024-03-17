import PropTypes from "prop-types";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ condition, redirect }) => {
  return condition ? <Outlet /> : <Navigate to={redirect} />;
};

ProtectedRoute.propTypes = {
  condition: PropTypes.bool.isRequired,
  redirect: PropTypes.string.isRequired,
};

export default ProtectedRoute;
