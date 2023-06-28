import React from 'react';
import { withRouter } from 'react-router-dom';
import Color from '../HOC/Color';

class Home extends React.Component {
	render() {
		return <div>Hello world from Homepage.</div>;
	}
}

export default Color(Home);
