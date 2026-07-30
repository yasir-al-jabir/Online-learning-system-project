import { createBrowserRouter } from "react-router";
import Root from "./pages/Root/Root";
import Home from "./pages/Home/Home";
const Router = createBrowserRouter([
{
  path:'/',
  Component: Root,
  children:[

     {
    path: "/home",
    element: <Home/>
  },
   
  ]
}
   
]);

export default Router
