import RestCard from "../RestCard";
import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import MockData from "../mocks/resCardMock.json"
// import { withPromotedLabel } from "../RestCard";




test("testing Restaurant card data",()=>{

    render(<RestCard resData={MockData}/>)
    
    const name = screen.getByText("Pizza Hut")
    expect(name).toBeInTheDocument()

})

// test("testing higher order components with label",()=>{

//     const PromotedRestCard = withPromotedLabel(RestCard);

//   // Render the enhanced component
//   render(<PromotedRestCard resData={MockData} />);
//   const aggregatedDiscountInfoV3 = screen.getByText("aggregatedDiscountInfoV3");
//   expect(aggregatedDiscountInfoV3).toBeInTheDocument();
// })