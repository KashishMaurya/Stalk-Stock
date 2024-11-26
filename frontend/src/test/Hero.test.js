import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";

// Testing suite for the Hero component
describe("Hero Component", () => {
  test("renders hero image with correct attributes", () => {
    // Render the component
    render(<Hero />);

    // Find the hero image by its alt text
    const heroImages = screen.getAllByAltText("Hero_img"); // This returns an array

    // Check that at least one image exists with the correct attributes
    expect(heroImages.length).toBeGreaterThan(0); // Ensure at least one match
    expect(heroImages[0]).toBeInTheDocument(); // Check the first match is in the document
    expect(heroImages[0]).toHaveAttribute("src", "/Images/homeHero.png"); // Verify its src attribute
  });
});
