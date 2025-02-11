import Contact from "../Contact"
import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"

describe("contact form testcases",()=>{
    test("testing contact us page",()=>{
        render(<Contact/>)
    
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument()
    
    })
    
    //iting button using text
    test("testing submit button",()=>{
        render(<Contact/>)
    
        const button = screen.getByText("Submit")
        expect(button).toBeInTheDocument()
    
    })
    //testing whole contact form
    test("testing whole contact form",()=>{
        render(<Contact/>)
    
        const contactForm = screen.getAllByRole("textbox")
        //testing based on length
        expect(contactForm.length).toBe(3)
        
    })
    
    //testing input boxes 
    test("test input boxes",()=>{
        render(<Contact/>)
    
        const testInput = screen.getAllByRole("textbox")
    
        
    })
})