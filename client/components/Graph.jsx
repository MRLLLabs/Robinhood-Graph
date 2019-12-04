import React from 'react';
import ChartTab from './ChartTab.jsx';
import Expand from './Expand.jsx';
import Wrapper from '../styled-components/Wrapper';

const Graph = (props) => {
	return (
		<Wrapper.Graph>
			<div id="stockPriceHistoryChart"></div>
			<Wrapper.GraphBottomContainer>
				<ChartTab changeView={props.changeView} />
				<Expand />
			</Wrapper.GraphBottomContainer>
		</Wrapper.Graph>
	);
}

export default Graph;
