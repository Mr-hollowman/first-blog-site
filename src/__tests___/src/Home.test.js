import { render, screen } from "@testing-library/react";
import Home from "../../Home";

describe("renders correcly for home component", () => {
  test("initial render", () => {
    jest.mock("../../useFetch", ()=>{
        const useFetch = jest.fn(()=>{
            return {
                data:null,
                isPending:false,
                error:null
            }
        })
    })
    render(<Home />);
    const result = screen.getByText("Loading....")
    expect(result).not.toBeTruthy()
  });
});
