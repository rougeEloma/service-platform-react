import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import NavBar from "./components/NavBar/NavBar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import Catalogue from "./pages/Catalogue/Catalogue";
import MesServices from "./pages/MesServices/MesServices";
import Add from "./pages/Add/Add";
import Orders from "./pages/Orders/Orders";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Pay from "./pages/Pay/Pay";
import Success from "./pages/Success/Success";
import NotFound from "./pages/NotFound/NotFound";
import "./App.scss";

const paths = [
  { path: "/", element: <Home /> },
  { path: "/service/:_id", element: <Service /> },
  { path: "/services", element: <Catalogue /> },
  { path: "/connection", element: <Login /> },
  { path: "/inscription", element: <Register /> },
  {
    path: "/commandes",
    element: (
      <PrivateRoute>
        <Orders />
      </PrivateRoute>
    ),
  },
  {
    path: "/ajouter",
    element: (
      <PrivateRoute>
        <Add />
      </PrivateRoute>
    ),
  },
  {
    path: "/mes-services",
    element: (
      <PrivateRoute>
        <MesServices />
      </PrivateRoute>
    ),
  },
  {
    path: "/payement/:_id",
    element: (
      <PrivateRoute>
        <Pay />
      </PrivateRoute>
    ),
  },
  {
    path: "/reussi",
    element: (
      <PrivateRoute>
        <Success />
      </PrivateRoute>
    ),
  },
  { path: "*", element: <NotFound /> },
];

function App() {
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: paths.map(({ path, element }) => ({ path, element })),
    },
  ]);

  return (
    <div className="App">
      <RecoilRoot>
        <RouterProvider router={router} />
        <Toaster />
      </RecoilRoot>
    </div>
  );
}

export default App;
