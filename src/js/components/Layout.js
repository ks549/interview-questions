import React from 'React';
import Footer from './Footer';

export default class Layout extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: ""
		};
	}

	
	render() {
		var name = this.state.name;
	return (
			<div>
			<h3>Welcome {this.state.name} </h3>
			<input type="textbox" value={this.state.name} onChange={this.textUpdate.bind(this)}/>
			<Footer/>
			</div>
			);
	}

	textUpdate(e){
		this.setState({
			name: e.target.value
		});

	}


}