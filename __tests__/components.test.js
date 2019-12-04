import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import App from '../client/components/App';
import Graph from '../client/components/Graph';
import Header from '../client/components/Header';
import ChartTab from '../client/components/ChartTab';
import Expand from '../client/components/Expand';
import fetch from 'isomorphic-fetch';
import Wrapper from '../client/styled-components/Wrapper';


describe('<App /> Component', () => {
	let component;
	beforeEach(() => component = shallow(<App />))

	const mockSuccessResponse = {};
	const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
	const mockFetchPromise = Promise.resolve({ // 3
		json: () => mockJsonPromise,
	});
	jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

	it('should create App', () => {
		expect(component).toHaveLength(1);
	});
	it('Should have sub-component graph', () => {
		expect(component.find(Graph).length).toEqual(1);
	});
	it('Should have sub-component header', () => {
		expect(component.find(Header).length).toEqual(1);
	});
	// it('Should have function updateTicker', () => {
	// 	expect(component.instance().initializeTicker()).exists();
	// })
	it('should hold state and have default values', () => {
		expect(component.state('view')).toBe('1D');
		expect(component.state('price')).toBe(0);
	})

});

describe('<Graph /> Component', () => {
	let component;
	beforeEach(() => component = shallow(<Graph />))

	test('Graph Should Exist', () => {
		expect(component).toHaveLength(1);
	});
	test('Should have sub-component charttab', () => {
		expect(component.find(ChartTab).length).toEqual(1);
	});
	test('Should have sub-component expand', () => {
		expect(component.find(Expand).length).toEqual(1);
	});
	test('Should have sub-component Wrapper.Graph', () => {
		expect(component.find(Wrapper.Graph).length).toEqual(1);
	});

});
//TODO
describe('<Header /> Component', () => {
	let component;
	beforeEach(() => component = shallow(<Graph />))

	test('Graph Should Exist', () => {
		expect(component).toHaveLength(1);
	});
	test('Should have sub-component charttab', () => {
		expect(component.find(ChartTab).length).toEqual(1);
	});
	test('Should have sub-component expand', () => {
		expect(component.find(Expand).length).toEqual(1);
	});
	test('Should have sub-component Wrapper.Graph', () => {
		expect(component.find(Wrapper.Graph).length).toEqual(1);
	});

});
