import React from 'react';
import ReactDOM from 'react-dom';
import CustomProduct from './CustomProduct';
import { shallow } from 'enzyme';

const props = {
    product: {
        bread: "Fladenbrot",
        sauces: [],
        toppings: []
    }
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CustomProduct {...props} />, div);
});

it('it matches snapshop', () => {
    const _props = { ...props };
    const tree = shallow(<CustomProduct {...props} />);
    expect(tree).toMatchSnapshot();
});