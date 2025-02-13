import { fireEvent, render, screen } from "@testing-library/react";
import BodyComponent from "../Body";
import { act } from "@testing-library/react";
import MockData from "../mocks/resListMockData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      Promise.resolve(MockData);
    },
  });
});

test("body component should contain search bar", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <BodyComponent />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.findAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

//   const searchBtn = screen.getByRole("button", { name: "Search" });

// //   const searchInput = screen.getByPlaceholderText(
// //     "Search for food and restaurants"
// //   );
//   const inputId = screen.getByTestId("inputId")
//   fireEvent.change(inputId, { target: { value: "pizza" } });
//   fireEvent.click(searchBtn);

  

//   // expect(searchBtn).toBeInTheDocument()
//   const resCard = screen.getAllByTestId("resCard");

//   expect(resCard.length).toBe(1);
});
