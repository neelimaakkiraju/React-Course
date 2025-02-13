import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import BodyComponent from "../Body"
import { act } from "react"
import MockData from "../mocks/resListMockData.json"
import { BrowserRouter } from "react-router-dom"

global.fetch =jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            Promise.resolve(MockData)
        }
    })
})

test("body component should contain search bar",async()=>{

    await act(async()=> render(<BrowserRouter>
    <BodyComponent/>
    </BrowserRouter>))

    const searchBtn = screen.getByRole("button",{name:"Search"})

    const searchInput = screen.getByPlaceholderText("Search for food and restaurants")

    const inputId = screen.getByTestId("inputId")

    expect(searchBtn).toBeInTheDocument()
   
})