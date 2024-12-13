import {React, lazy,Suspense, useState, useEffect}from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./src/components/Body";
import HeadComponent from "./src/components/Header";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import ResMenu from "./src/components/ResMenu";
import UserContext from "./src/utils/userContext";
// import Grocery from "./src/components/Grocery"

const Grocery = lazy(()=> import ("./src/components/Grocery"))


const AppLayout = () => {
  const [userName , setUserName] = useState()

  useEffect(()=>{
   const data = {
    name:"Neelima",
   }
   setUserName(data.name)

  },[])
  return (
    <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
    <div className="app">
      <HeadComponent />
      <Outlet/>
    </div>
    </UserContext.Provider>
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
