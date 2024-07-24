import { screen, render, fireEvent } from "@testing-library/react";
import Card from "./Card";


const navigateClick = jest.fn();


const data = {
  img: "https://flagcdn.com/w320/ua.png",
  name: "Ukraine",
  info: [
    {
      title: "Population",
      description: "44,134,693",
    },
    {
      title: "Region",
      description: "Europe",
    },
    {
      title: "Capital",
      description: "Kyiv",
    },
  ],
  handleNavigate: navigateClick,
};

describe("Render cards", () => {
  test("Render card", () => {
    render(<Card {...data} />);
    
    expect(screen.getByText("Ukraine")).toBeInTheDocument();
  });
  
  test("Card snapshot", () => {
    const card = render(<Card {...data}/>)
    
    expect(card).toMatchSnapshot();
  });
  
  test("Empty card snapshot", () => {
    const card = render(<Card />)
    
    expect(card).toMatchSnapshot();
  })

  test("Button navigate to country details", () => {
    render(<Card {...data}/>)
    const article = screen.getByRole('article');

    fireEvent.click(article);


    expect(navigateClick).toHaveBeenCalled()
  })
});
