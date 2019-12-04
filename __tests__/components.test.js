import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import App from '../client/components/App';
import Graph from '../client/components/Graph.jsx';
import Header from '../client/components/Header.jsx';
import fetch from "isomorphic-fetch";


describe('<App /> Component', () => {
	let component;
	beforeEach(() =>  component = shallow(<App />))
	const mockSuccessResponse = {};
	const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
	const mockFetchPromise = Promise.resolve({ // 3
		json: () => mockJsonPromise,
	});
	jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

	test('App Should exist', () => {
		expect(component).toHaveLength(1);
	});
	test('Should have sub-component graph', () => {
		expect(component.find(Graph).length).toEqual(1);
	});
	test('Should have sub-component header', () => {
		expect(component.find(Header).length).toEqual(1);
	});
	test('Should have function updateTicker', () => {
		expect(component.instance().initializeTicker()).toEqual(1);
	})
})


wrapper = shallow(<Graph />);
test('Graph Should Exist', () => {
	expect(wrapper.exists()).to.be.true;
});
test('Default view should be 1D', () => {
	expect(wrapper.find(Header).length).toEqual(1);
});
test('Default view should be 1D', () => {
	expect(wrapper.find(Header).length).toEqual(1);
});

test('two plus two is four', () => {
	expect(2 + 2).toBe(4);
});