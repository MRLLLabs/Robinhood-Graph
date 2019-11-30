import React from 'react';
import Header from './Header.jsx';
import Graph from './Graph.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: null,
			name: null,
			symbol: null,
			analystHold: null,
			robinhoodOwners: null,
			historicPrices1D: [],
			historicPrices1W: [],
			historicPrices1M: [],
			historicPrices3M: [],
			historicPrices1Y: [],
			historicPrices5Y: [],
		}
	}

	componentDidMount() {
		console.log('component did mount');
		fetch('/stocks?q=1', {
			method: 'GET'
		})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			this.setState(data[0]);
		})
	}

	render() {
		return (
			<div>
				{this.state.name}
				<Header state={this.state}/>
				<Graph state={this.state}/>
			</div>
		)
	}
}

export default App;