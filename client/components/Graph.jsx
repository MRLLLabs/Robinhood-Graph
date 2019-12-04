import React from 'react';
import ChartTab from './ChartTab.jsx';
import Expand from './Expand.jsx';

const Graph = (props) => {
	return (
		<div>
			<div id="chart"></div>
			<ChartTab changeView={props.changeView} view={props.state.view} />
			<Expand />
		</div>
	);
}

export default Graph;
