import React from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Test component <AddCategory />", () => {
  const setCategories = jest.fn();
  // const setCategories = () => {};
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  
  beforeEach(()=> {
      jest.clearAllMocks();
      wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

  test("should show <GifGridItem /> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change input text", () => {
    const input = wrapper.find("input");
    const value = "hello world";
    // simulate event change event
    input.simulate("change", { target: { value } });
    // after the value is injected.
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe( value );
  });
  test("should not send the form", () => {
    wrapper.find('form').simulate('submit',{preventDefault(){}});
    expect(setCategories).not.toHaveBeenCalled();
  });
  test("should send the form and clean the input text", () => {
    const value = 'simpsons';
    // simulate event change event
    wrapper.find("input").simulate("change", { target: { value } });
    // simulate submit event
    wrapper.find('form').simulate('submit',{preventDefault(){}});
    // expected
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find("input").prop('value')).toBe('');
  });
});
