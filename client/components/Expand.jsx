import React from 'react';
import Wrapper from '../styled-components/Wrapper'

var Expand = (props) => {
	return (
		<Wrapper.Expand lineColor={props.state.lineColor} backgroundColor={props.state.backgroundColor}>
			Expand &emsp; &emsp;
		</Wrapper.Expand>
	)
}

export default Expand;