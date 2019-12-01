import React from 'react';
import Header from './Header.jsx';
import Graph from './Graph.jsx';
import { CountUp } from 'countup.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			view: '1D',
			id: null,
			name: null,
			symbol: null,
			analystHold: null,
			robinhoodOwners: null,
			price: 0,
			historicPrice1D: [],
			historicPrice1W: [],
			historicPrice1M: [],
			historicPrice3M: [],
			historicPrice1Y: [],
			historicPrice5Y: [],
		}
		this.updateTicker = this.updateTicker.bind(this);
		this.changeView = this.changeView.bind(this);
	}

	componentDidMount() {
		this.populateStocks(()=> {
			this.initializeTicker();
			console.log(this.state.historicPrices1D);
		});
	}

	changeView(option) {
		this.setState({
			view: option,
			id: this.state.id,
			name: this.state.name,
			symbol: this.state.symbol,
			analystHold: this.state.analystHold,
			robinhoodOwners: this.state.robinhoodOwners,
			price: this.state.price,
			historicPrices1D: this.state.historicPrices1D,
			historicPrices1W: this.state.historicPrices1W,
			historicPrices1M: this.state.historicPrices1M,
			historicPrices3M: this.state.historicPrices3M,
			historicPrices1Y: this.state.historicPrices1Y,
			historicPrices5Y: this.state.historicPrices5Y,
		})
	}
	
	populateStocks(callback) {
		fetch('/stocks?q=1', {
			method: 'GET'
		})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			data[0].view = this.state.view;
			this.setState(data[0], callback);
		})
	}

	initializeTicker() {
		const options = {
			decimalPlaces: 2,
		};
		window.ticker = new CountUp('ticker', this.state.price, options);
		ticker.start();
	}

	updateTicker(price) {
		ticker.update(price);
	}

	render() {
		return (
			<div>
				<Header state={this.state} />
				<Graph state={this.state} updateTicker={this.updateTicker} changeView={this.changeView} />
			</div>
		)
	}
}

export default App;