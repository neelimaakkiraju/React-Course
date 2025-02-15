import HeadComponent from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore  from "../../utils/appStore";
import "@testing-library/jest-dom"

test("header should contain login button",()=>{
  render(
   <BrowserRouter>
   <Provider store={appStore}>
     <HeadComponent/>
   </Provider>
   </BrowserRouter>
  )

   const loginBtn = screen.getByRole("button")
   expect(loginBtn).toBeInTheDocument()
})

test("header should contain cart with 0 value",()=>{
  render(
   <BrowserRouter>
   <Provider store={appStore}>
     <HeadComponent/>
   </Provider>
   </BrowserRouter>
  )

   const cartBtn = screen.getByText("Cart - 0 Items")
   expect(cartBtn).toBeInTheDocument()
}) 


test("testing entire cart",()=>{
  render(
   <BrowserRouter>
   <Provider store={appStore}>
     <HeadComponent/>
   </Provider>
   </BrowserRouter>
  )

   const cartBtn = screen.getByText(/Cart/)
   expect(cartBtn).toBeInTheDocument()
})


test("onclick login button should change to logout button",()=>{
  render(
   <BrowserRouter>
   <Provider store={appStore}>
     <HeadComponent/>
   </Provider>
   </BrowserRouter>
  )

   const loginButton = screen.getByRole("button",{name:"Login"})

   fireEvent.click(loginButton)

   const logoutBtn = screen.getByRole("button",{name:"Logout"})

   expect(logoutBtn).toBeInTheDocument()
})