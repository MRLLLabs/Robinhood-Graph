import React from 'react';
import Wrapper from '../styled-components/Wrapper';

const Header = (props) => {
	let currentPriceArray = props.state[`historicPrice${props.state.view}`];
	let gainLoss = currentPriceArray[currentPriceArray.length - 1] - currentPriceArray[0];
	let gainlossSymbol = gainLoss >= 0 ? '+' : '-';
	let gainLossPercent = gainLoss / currentPriceArray[currentPriceArray.length - 1];
	return (
		<Wrapper.Header>
			<Wrapper.HeaderTopContainer>
				<Wrapper.Company>{`${props.state.name}`}</Wrapper.Company>
				<Wrapper.HeaderTopButtons>
					<Wrapper.AnalystHold>
						&emsp; {props.state.analystHold.toFixed(0)}% Hold
					</Wrapper.AnalystHold>
					<Wrapper.RobinhoodOwners>
						&emsp; {props.state.robinhoodOwners.toLocaleString()}
					</Wrapper.RobinhoodOwners>
				</Wrapper.HeaderTopButtons>
			</Wrapper.HeaderTopContainer>
			<div>$<Wrapper.Ticker>0</Wrapper.Ticker></div>
			<Wrapper.GainLoss>{`${gainlossSymbol}$${Math.abs(gainLoss).toFixed(2)} (${gainlossSymbol}${Math.abs(gainLossPercent * 100).toFixed(2)}%)`}</Wrapper.GainLoss>
		</Wrapper.Header>
	);
};

export default Header;
