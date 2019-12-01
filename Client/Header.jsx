import React from 'react';

var Header = (props) => {
	let currentPriceArray = props.state[`historicPrice${props.state.view}`];
	let gainLoss = currentPriceArray[0] - currentPriceArray[currentPriceArray.length-1];
	let gainlossSymbol = gainLoss >= 0 ? '+' : '-';
	let gainLossPercent = gainLoss / currentPriceArray[0];
	return (
		<div id="Header">
			<span>{`${props.state.name} (${props.state.symbol})`}</span>
			<div id="ticker">0</div>
			<div>{`${gainlossSymbol}$${Math.abs(gainLoss).toFixed(2)} (${gainlossSymbol}${Math.abs(gainLossPercent).toFixed(2)}%)`}</div>
		</div>
	)
}

export default Header;