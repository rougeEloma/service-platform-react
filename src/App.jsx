import './App.scss'
import Home from './pages/home/Home';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import Messages from './pages/messages/Messages';
import MyServices from "./pages/myServices/MyServices";
import MyOrders from "./pages/orders/MyOrders";
import AddService from "./pages/add/AddService"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Services from './pages/services/Services';
import SingleService from './pages/SingleService/SingleService';

export default function App() {

  const Layout = () => {
    return (
      <div className="app">
        <NavBar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter( [
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/explorer",
          element:<Services/>
        },
        {
          path:"/mes-services",
          element:<MyServices/>
        },
        {
          path:"/ajouter-service",
          element:<AddService/>
        },
        {
          path:"/mes-commandes",
          element:<MyOrders/>
        },
        {
          path:"/messages",
          element:<Messages/>
        },
        {
          path:"/service/123",
          element:<SingleService/>
        }
      ]
    },
  ]);
  return (
    <>
      <div><RouterProvider router={router}/></div>
      {/*
       <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus odio cumque et ratione error magnam magni enim voluptatem natus mollitia provident odit, incidunt unde quasi atque eius, a libero repellendus?</h1>
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus odio cumque et ratione error magnam magni enim voluptatem natus mollitia provident odit, incidunt unde quasi atque eius, a libero repellendus?</h1>
      
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus odio cumque et ratione error magnam magni enim voluptatem natus mollitia provident odit, incidunt unde quasi atque eius, a libero repellendus?</h1>
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus odio cumque et ratione error magnam magni enim voluptatem natus mollitia provident odit, incidunt unde quasi atque eius, a libero repellendus?</h1>
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus odio cumque et ratione error magnam magni enim voluptatem natus mollitia provident odit, incidunt unde quasi atque eius, a libero repellendus?</h1>
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus odio cumque et ratione error magnam magni enim voluptatem natus mollitia provident odit, incidunt unde quasi atque eius, a libero repellendus?</h1> */}
    </>
  )
}
