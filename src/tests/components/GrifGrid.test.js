import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
// mock useFetchGifs.
jest.mock("../../hooks/useFetchGifs");

describe("Test component <GifGrid />", () => {
  const category = "simpsons";

  test("should show <GifGrid /> correctly", () => {
   useFetchGifs.mockReturnValue({
    data: [],
    loading: true,
    total: 0
   });
   const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show up the items from category value using Fetch Gifs", () => {
    const gifs = [{
        id: '123',
        url: 'http://localhost',
        title: 'ABC'
    }];
    
    useFetchGifs.mockReturnValue({
        data: gifs,
        loading: false,
        total: 1
       });
       const wrapper = shallow(<GifGrid category={category} />);
       expect(wrapper).toMatchSnapshot();
       expect(wrapper.find('.animate__animated animate__flash').exists()).toBe(false);
       expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });   
});
