import React from 'react';
import * as d3 from 'd3';
import * as fc from 'd3fc';

const timeIntervals = [300000, 3600000, 90000000, 90000000, 86400000, 604800000]; //FIX
const timeIds = ['1D', '1W', '1M', '3M', '1Y', '5Y'];

const Chart = (props) => {
	let data = [];
	let time = Date.now();
	let timeInterval = timeIntervals[timeIds.indexOf(props.view)];
	for (let i = 0; i < props.prices.length; i++) {
		data[i] = { date: time, price: props.prices[i] };
		time -= timeInterval;
	}

	const margin = { top: 50, right: 50, bottom: 50, left: 50 };
	const width = window.innerWidth - margin.left - margin.right;
	const height = window.innerHeight - margin.top - margin.bottom;
	// add SVG to the page
	const svg = d3
		.select('#chart')
		.append('svg')
		.attr('width', width + margin['left'] + margin['right'])
		.attr('height', height + margin['top'] + margin['bottom'])
		.append('g')
		.attr('transform', `translate(${margin['left']},  ${margin['top']})`);

	// find data range
	const xMin = d3.min(data, d => {
		return d['date'];
	});
	const xMax = d3.max(data, d => {
		return d['date'];
	});
	const yMin = d3.min(data, d => {
		return d['price'];
	});
	const yMax = d3.max(data, d => {
		return d['price'];
	});
	// scales for the charts
	const xScale = d3
		.scaleTime()
		.domain([xMin, xMax])
		.range([0, width]);
	const yScale = d3
		.scaleLinear()
		.domain([yMin - 5, yMax])
		.range([height, 0]);


	svg
		.append('g')
		.attr('id', 'xAxis')
		.attr('transform', `translate(0, ${height})`)
		.call(d3.axisBottom(xScale));
	svg
		.append('g')
		.attr('id', 'yAxis')
		.attr('transform', `translate(${width}, 0)`)
		.call(d3.axisRight(yScale));

	const line = d3
		.line()
		.x(d => {
			return xScale(d['date']);
		})
		.y(d => {
			return yScale(d['price']);
		});
	// Append the path and bind data
	svg
		.append('path')
		.data([data])
		.style('fill', 'none')
		.attr('id', 'priceChart')
		.attr('stroke', 'steelblue')
		.attr('stroke-width', '1.5')
		.attr('d', line);

	return (
		<div>
			<div id="chart">CHART</div>
		</div>
	);

}

export default Chart;
