import {React, lazy,Suspense}from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./src/components/Body";
import HeadComponent from "./src/components/Header";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import ResMenu from "./src/components/ResMenu";
// import Grocery from "./src/components/Grocery"

const Grocery = lazy(()=> import ("./src/components/Grocery"))


const AppLayout = () => {
  return (
    <div className="app">
      <HeadComponent />
      <Outlet/>
    </div>
  );
};



const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout /> ,children : [
    {
      path: "/",
      element: <BodyComponent/>,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path:"/restaurant/:id",
      element: <ResMenu/>,

    },
    {
      path:"/grocery",
      element: <Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>

    },

  ],
  errorElement: <Error/>,

  },

  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
