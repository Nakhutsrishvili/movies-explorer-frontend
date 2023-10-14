import { Navigate } from "react-router-dom";

function RouteToMovies(props) {
  if (localStorage.getItem("token")) {
    return <Navigate to="/movies" />;
  }

  return props.children;
}

export default RouteToMovies;
