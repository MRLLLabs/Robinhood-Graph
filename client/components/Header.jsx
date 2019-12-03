import React from 'react';

const Header = (props) => {
	let currentPriceArray = props.state[`historicPrice${props.state.view}`];
	let gainLoss = currentPriceArray[currentPriceArray.length - 1] - currentPriceArray[0];
	let gainlossSymbol = gainLoss >= 0 ? '+' : '-';
	let gainLossPercent = gainLoss / currentPriceArray[currentPriceArray.length - 1];
	return (
		<div id="Header">
			<span>{`${props.state.name} (${props.state.symbol})`}</span>
			<div>
				<button className="headerButton" id="analystHold">{props.state.analystHold.toFixed(0)}% Hold</button>
				<button className="headerButton" id="robinhoodOwners">{props.state.robinhoodOwners.toLocaleString()}</button>
			</div>
			<div id="ticker">0</div>
			<div>{`${gainlossSymbol}$${Math.abs(gainLoss).toFixed(2)} (${gainlossSymbol}${Math.abs(gainLossPercent).toFixed(2)}%)`}</div>
		</div>
	);
};

export default Header;
