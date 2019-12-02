import React from 'react';
import d3 from 'd3';
import ChartTab from './ChartTab.jsx';
import Expand from './Expand.jsx';
import Chart from './Chart.jsx';

const Graph = (props) => {
	return (
		<div>
			<Chart prices={props.state[`historicPrice${props.state.view}`]} view={props.state.view}/>
			<ChartTab changeView={props.changeView} view={props.state.view} />
			<Expand />
		</div>
	);
}

export default Graph;
