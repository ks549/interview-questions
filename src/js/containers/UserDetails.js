import React from 'react';
import {connect} from 'react-redux';

class UserDetails extends React.Component{
	render(){
		if(!this.props.user){
			return (<h4></h4>);
		}
		
		return(
			<div class="well">
			<img src={this.props.user.thumbnail} width={100} height={110}/>
			<h3>{this.props.user.first} {this.props.user.last}</h3>
			<h5>{this.props.user.job}</h5>
			</div>
		);
	}
	
}
function mapStateToProps(state){
	return {user: state.activeUser};
}

export default connect(mapStateToProps)(UserDetails);