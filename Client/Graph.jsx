import React from 'react';
import d3 from 'd3';
import ChartTab from './ChartTab.jsx';
import Expand from './Expand.jsx';

class Graph extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	// componentDidMountss() {
	// 	console.log('Graph did mount');
	// 	this.buildGraph('1D', 5 * 60 * 1000);
	// 	debugger;
	// 	// append SVG
	// 	const initialiseChart = (data) => {
	// 		const margin = { top: 50, right: 50, bottom: 50, left: 50 };
	// 		const width = window.innerWidth - margin.left - margin.right;
	// 		const height = window.innerHeight - margin.top - margin.bottom;
	// 		// add SVG to the page
	// 		const svg = d3
	// 			.select('#chart')
	// 			.append('svg')
	// 			.attr('width', width + margin['left'] + margin['right'])
	// 			.attr('height', height + margin['top'] + margin['bottom'])
	// 			.call(responsivefy)
	// 			.append('g')
	// 			.attr('transform', `translate(${margin['left']},  ${margin['top']})`);
	// 	}
	// 	initialiseChart();
	// 	// find data range
	// 	const xMin = d3.min(data, d => {
	// 		return d['date'];
	// 	});
	// 	const xMax = d3.max(data, d => {
	// 		return d['date'];
	// 	});
	// 	const yMin = d3.min(data, d => {
	// 		return d['close'];
	// 	});
	// 	const yMax = d3.max(data, d => {
	// 		return d['close'];
	// 	});
	// 	// scales for the charts
	// 	const xScale = d3
	// 		.scaleTime()
	// 		.domain([xMin, xMax])
	// 		.range([0, width]);
	// 	const yScale = d3
	// 		.scaleLinear()
	// 		.domain([yMin - 5, yMax])
	// 		.range([height, 0]);
	// 	// create the axes component
	// 	svg
	// 		.append('g')
	// 		.attr('id', 'xAxis')
	// 		.attr('transform', `translate(0, ${height})`)
	// 		.call(d3.axisBottom(xScale));
	// 	svg
	// 		.append('g')
	// 		.attr('id', 'yAxis')
	// 		.attr('transform', `translate(${width}, 0)`)
	// 		.call(d3.axisRight(yScale));
	// }

	// buildGraph(option, timeInterval) {
	// 	// Load and parse data
	// 	const loadData = d3.json(this.props.state['1D']).then(data => {
	// 		const chartResultsData = data['chart']['result'][0];
	// 		return chartResultsData['timestamp'].map((time, index) => ({
	// 			date: new Date(time * 1000),
	// 			high: quoteData['high'][index]
	// 		}));
	// 	});
	// }



	render() {
		return (
			<div>
				<div id="chart">CHART</div>
				<ChartTab changeView={this.props.changeView} view={this.props.state.view} />
				<Expand />
			</div>
		);
	}
}

export default Graph;
