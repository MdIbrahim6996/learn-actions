import { render, screen } from "@testing-library/react";
import App from "../App";
it("renders App", () => {
  render(<App />);

  const heading = screen.getByRole("heading", {name:/hello/i})
  expect(heading).toBeDefined()
});

it("runs", ()=>{
    expect(true).toBe(true)
})
