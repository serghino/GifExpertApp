import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe("Test component <GifExpertApp />", () => {

  test("should show <GifExpertApp /> correctly", () => {
   const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should get a list of elements", () => {
    const categories = ['simpsons', 'goku'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper.find('GifGrid').length).toBe(2);
   });
});
