import React from 'react';
import ChartTab from './ChartTab.jsx';
import Expand from './Expand.jsx';
import Wrapper from '../styled-components/Wrapper'; 
import { Chart } from '../styled-components/graph.js';

const Graph = (props) => {
	return (
		<Wrapper.Graph>
			<Chart />
			<ChartTab changeView={props.changeView} view={props.state.view} />
			<Expand />
		</Wrapper.Graph>
	);
}

export default Graph;
