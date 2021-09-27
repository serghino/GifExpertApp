import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Test component <GifGridItem />', () => {
    const title= 'Sergio';
    const url = 'http://test';
    const wrapper = shallow( <GifGridItem title={title} url={url}/> );
    
    test('should show <GifGridItem /> correctly', () => {
        expect( wrapper ).toMatchSnapshot();

    });
    test('should have a paragraph with the title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    })
    
    test('should have an image with the title and url', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    
    test('should contain the class animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.prop('className')).toContain('animate__fadeIn');
    })
    
})
