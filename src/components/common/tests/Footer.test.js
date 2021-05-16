import React from "react";
import renderer from 'react-test-renderer';
import { act } from "react-dom/test-utils";

import Footer from '../Footer';

describe('Footer', () => {
    test('renders', () => {
        const component = renderer.create(<Footer />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
