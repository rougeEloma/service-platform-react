import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import { NavBar, PrivateRoute, Footer } from "./components";
import {
  Home,
  Gig,
  Gigs,
  MyGigs,
  Add,
  Orders,
  Login,
  Register,
  Pay,
  Success,
  NotFound,
} from "./pages";
import "./App.scss";

const paths = [
  { path: "/", element: <Home /> },
  { path: "/service/:_id", element: <Gig /> },
  { path: "/services", element: <Gigs /> },
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
        <MyGigs />
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
