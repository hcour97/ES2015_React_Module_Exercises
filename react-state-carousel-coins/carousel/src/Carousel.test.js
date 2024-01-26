import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it('renders without crashing', function() {
  render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
})

it('matches snapshot', () => {
  const { asFragment } = render(<Carousel photos={TEST_IMAGES} title="images for testing"/>);
  expect(asFragment).toMatchSnapshot();
})

it("works when you click on the left arrow", function() {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing"/>
  );

  const currImg = container.querySelector(".Card-image");

  // Should go forward twice and backwards once
  fireEvent.click(container.querySelector(".bi-arrow-right-circle"))
  expect(currImg.getAttribute("src")).toEqual("test2.com")
  expect(currImg.getAttribute("src")).not.toEqual("test1.com")

  fireEvent.click(container.querySelector(".bi-arrow-right-circle"))
  expect(currImg.getAttribute("src")).toEqual("test3.com")
  expect(currImg.getAttribute("src")).not.toEqual("test2.com")

  fireEvent.click(container.querySelector(".bi-arrow-left-circle"))
  expect(currImg.getAttribute("src")).toEqual("test2.com")
  expect(currImg.getAttribute("src")).not.toEqual("test1.com")
});

it("hides arrows properly", function() {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing"/>
  );

  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  const rightArrow = container.querySelector(".bi-arrow-right-circle");

  // check initial state: left arrow hidden, right arrow visible
  expect(leftArrow).toHaveStyle({ visibility: "hidden"});
  expect(rightArrow).toHaveStyle({ visibility: "visible"});

  // check middle of carousel: left and right arrows visible
  fireEvent.click(container.querySelector(".bi-arrow-right-circle"))
  expect(leftArrow).toHaveStyle({ visibility: "visible"});
  expect(rightArrow).toHaveStyle({ visibility: "visible"});

  // check end of carousel: left arrow visible, right arrow hidden
  fireEvent.click(container.querySelector(".bi-arrow-right-circle"))
  expect(leftArrow).toHaveStyle({ visibility: "visible"});
  expect(rightArrow).toHaveStyle({ visibility: "hidden"});
  
  
})

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});


