import React from 'react';
import Header from './Header.jsx';
import Graph from './Graph.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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
		.then((data) => {
			console.log('data:', data)
			console.log('success returned');
		})
	}

	render() {
		return (
			<div>
				<Header state={this.state}/>
				<Graph state={this.state}/>
			</div>
		)
	}
}

export default App;