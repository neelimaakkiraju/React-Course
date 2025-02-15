import { screen,render, fireEvent } from "@testing-library/react";
import ResMenu from "../ResMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { act } from "@testing-library/react";
import MockData from "../mocks/resMenuMock.json"
import HeadComponent from "../Header";
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";



global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MockData);
      },
    });
  });


  test("recommended cards testing", async () => {

    await act(async () =>
      render(
        <BrowserRouter>

<Provider store={appStore}>
        <HeadComponent/>
        <ResMenu/>
       </Provider>
        </BrowserRouter>
       
      ))

    const listData = screen.getByText("Accompaniments (5)")
    fireEvent.click(listData)

    expect(screen.getAllByTestId("foodItems").length).toBe(5)
    expect(screen.getByText("Cart - 0 Items")).toBeInTheDocument()


    const addBtn = screen.getAllByRole("button",{name:"ADD +"})
    fireEvent.click(addBtn[0])
    expect(screen.getByText("Cart - 1 Items")).toBeInTheDocument()
    fireEvent.click(addBtn[1])
    expect(screen.getByText("Cart - 2 Items")).toBeInTheDocument()


    })