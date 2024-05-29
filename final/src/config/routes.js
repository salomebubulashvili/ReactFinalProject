import routes from "../constants/routes";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Movies from "../pages/movies/Movies";
import AuthGuard from "../Guards/AuthGuard";
export const appRoutes = [
  {
    path: routes.home,
    Component: Home,
  },
  {
    path: routes.Movies,
    Component: Movies,
    Guard: AuthGuard,
  },
  {
    path: routes.logIn,
    Component: Login,
  },
  {
    path: routes.register,
    Component: Register,
  },
];