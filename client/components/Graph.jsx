import React from 'react';
import ChartTab from './ChartTab.jsx';
import Expand from './Expand.jsx';
import Wrapper from '../styled-components/Wrapper'; 

const Graph = (props) => {
	return (
		<Wrapper.Graph>
			<div id="stockPriceHistoryChart"></div>
			<ChartTab changeView={props.changeView}/>
			<Expand />
		</Wrapper.Graph>
	);
}

export default Graph;
