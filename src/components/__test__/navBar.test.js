import React from 'react';
import { Navbar } from 'components/navBar';

describe('Component: <Navbar />', () => {

    let wrapper;
    const title = 'Test Title';
    beforeEach(() => {
        // eslint-disable-next-line no-undef
        wrapper = shallow(<Navbar title={title}/>);
    });

    it('should test a simple shallow <Navbar /> is created', () => {
        expect(wrapper).toEqual(expect.anything());
    });

    it('should have header text', () => {
        expect(wrapper.text()).toEqual(title);
    });

});
