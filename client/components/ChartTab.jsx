import React from 'react';
import Wrapper from '../styled-components/Wrapper'

var ChartTab = (props) => {
	return (
		<Wrapper.ChartTab>
			<Wrapper.Tab1D view={props.view} onClick={()=> {props.changeView('1D')}} lineColor={props.state.lineColor} backgroundColor={props.state.backgroundColor}>1D</Wrapper.Tab1D>
			<Wrapper.Tab1W view={props.view} onClick={()=> {props.changeView('1W')}} lineColor={props.state.lineColor} backgroundColor={props.state.backgroundColor}>1W</Wrapper.Tab1W>
			<Wrapper.Tab1M view={props.view} onClick={()=> {props.changeView('1M')}} lineColor={props.state.lineColor} backgroundColor={props.state.backgroundColor}>1M</Wrapper.Tab1M>
			<Wrapper.Tab3M view={props.view} onClick={()=> {props.changeView('3M')}} lineColor={props.state.lineColor} backgroundColor={props.state.backgroundColor}>3M</Wrapper.Tab3M>
			<Wrapper.Tab1Y view={props.view} onClick={()=> {props.changeView('1Y')}} lineColor={props.state.lineColor} backgroundColor={props.state.backgroundColor}>1Y</Wrapper.Tab1Y>
			<Wrapper.Tab5Y view={props.view} onClick={()=> {props.changeView('5Y')}} lineColor={props.state.lineColor} backgroundColor={props.state.backgroundColor}>5Y</Wrapper.Tab5Y>
		</Wrapper.ChartTab>
	)
}

export default ChartTab;