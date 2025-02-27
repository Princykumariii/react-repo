// import "@testing-library/jest-dom";
// import Counter from "Counter";

// import {render,screen} from "@testing-library/react";

// test("render Counter with initialValue",()=>{
    
//     expect (screen.getByText("Counter:0")).toBeInTheDocument();
// });

import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("renders with the correct initial value", () => {
    render(<Counter initialValue={5} />);
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue).toHaveTextContent("5");
  });

  test("increments counter value when Increment button is clicked", () => {
    render(<Counter initialValue={5} />);
    const counterValue = screen.getByTestId("counter-value");
    const incrementButton = screen.getByText("Increment");

    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent("6");
  });

  test("decrements counter value when Decrement button is clicked", () => {
    render(<Counter initialValue={5} />);
    const counterValue = screen.getByTestId("counter-value");
    const decrementButton = screen.getByText("Decrement");

    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent("4");
  });

  test("does not decrement below zero", () => {
    render(<Counter initialValue={0} />);
    const counterValue = screen.getByTestId("counter-value");
    const decrementButton = screen.getByText("Decrement");

    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent("0");
  });

  test("resets the counter to the initial value when Reset button is clicked", () => {
    render(<Counter initialValue={10} />);
    const counterValue = screen.getByTestId("counter-value");
    const incrementButton = screen.getByText("Increment");
    const resetButton = screen.getByText("Reset");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton); 
    fireEvent.click(resetButton);

    expect(counterValue).toHaveTextContent("10");
  });
});
