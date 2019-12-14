import React from 'react';
import ChartTab from './ChartTab.jsx';
import Expand from './Expand.jsx';
import Wrapper from '../styled-components/Wrapper';

const Graph = (props) => {
	return (
		<Wrapper.Graph>
			<Wrapper.Chart id="stockPriceHistoryChart"/>
			<Wrapper.GraphBottomContainer>
				<ChartTab changeView={props.changeView} view={props.view} state={props.state}/>
				<Expand state={props.state}/>
			</Wrapper.GraphBottomContainer>
		</Wrapper.Graph>
	);
}

export default Graph;
