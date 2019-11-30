import React from 'react';

var GraphTab = (props) => {
	return (
		<div id="graphButtons">
			<button 
				className={props.view === '1D' ? 'selectedTab' : 'unselectedTab'} 
				onClick={()=> {props.changeView('1D')}}>1D</button>
			<button 
				className={props.view === '1W' ? 'selectedTab' : 'unselectedTab'} 
				onClick={()=> {props.changeView('1W')}}>1W</button>
			<button 
				className={props.view === '1M' ? 'selectedTab' : 'unselectedTab'} 
				onClick={()=> {props.changeView('1M')}}>1M</button>
			<button 
				className={props.view === '3M' ? 'selectedTab' : 'unselectedTab'} 
				onClick={()=> {props.changeView('3M')}}>3M</button>
			<button 
				className={props.view === '1Y' ? 'selectedTab' : 'unselectedTab'} 
				onClick={()=> {props.changeView('1Y')}}>1Y</button>
			<button 
				className={props.view === '5Y' ? 'selectedTab' : 'unselectedTab'} 
				onClick={()=> {props.changeView('5Y')}}>5Y</button>
		</div>
	)
}

export default GraphTab;