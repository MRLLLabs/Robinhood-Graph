/* eslint-disable no-undef */
import React from 'react';
import path from 'path';
import Header from './Header.jsx';
import Graph from './Graph.jsx';
import buildChart from '../methods/buildChart.js';
import buildViewText from '../methods/buildViewText.js';
import Odometer from 'odometer';
import Wrapper from '../styled-components/Wrapper';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			view: '1D',
			viewText: 'Last Day',
			timeOfDay: 'Pre-Market',
			id: null,
			name: null,
			symbol: null,
			analystHold: 0,
			robinhoodOwners: 0,
			price: 0,
			historicPrice1D: [],
			historicPrice1W: [],
			historicPrice1M: [],
			historicPrice3M: [],
			historicPrice1Y: [],
			historicPrice5Y: [],
			gainLoss: 0,
			gainLossPercent: 0,
			gainlossSymbol: '',
		};
		this.updateTicker = this.updateTicker.bind(this);
		this.changeView = this.changeView.bind(this);
		this.ticker = null;
	}

	componentDidMount() {
		this.populateStocks(() => {
			this.initializeTicker();
			let {mostRecentDate, mostRecentPrice} = buildChart(this.state[`historicPrice${this.state.view}`], this.state.view, this.updateTicker, this.state.name);
			this.updateTicker(mostRecentPrice);
		});
	}

	changeView(option) {
		this.setState({
			view: option,
			viewText: buildViewText(option),
			price: this.state[`historicPrice${option}`][this.state[`historicPrice${option}`].length - 1]
			}, () => {
				buildChart(this.state[`historicPrice${this.state.view}`], this.state.view, this.updateTicker, this.state.name)
				this.updateTicker(this.state.price);
			}
		);
	}

	populateStocks(callback) {
		fetch(`/stocks${window.location.search}`, { method: 'GET' })
		.then((response) => response.json() )
		.then((data) => { this.setState(data[0], callback); });
	}

	initializeTicker() {
		const tickerEl = document.getElementById('ticker');
		this.ticker = new Odometer({
			el: tickerEl,
			value: 100.04,
			duration: 400,
			format: '(,ddd).dd',
		});
	}

	updateTicker(price, text = buildViewText(this.state.view)) {
		this.ticker.update(price.toFixed(2));
		let currentPriceArray = this.state[`historicPrice${this.state.view}`];
		let gainLoss = price - currentPriceArray[0];
		let gainlossSymbol = gainLoss >= 0 ? '+' : '-';
		let gainLossPercent = gainLoss / currentPriceArray[currentPriceArray.length - 1];
		this.setState({
			viewText: text,
			gainLoss: gainLoss,
			gainLossPercent: gainLossPercent,
			gainlossSymbol: gainlossSymbol,
		})
	}
	
	render() {
		return (
			<Wrapper.App>
				<Header state={this.state} />
				<Graph changeView={this.changeView} view={this.state.view}/>
			</Wrapper.App>
		);
	}
}

export default App;
