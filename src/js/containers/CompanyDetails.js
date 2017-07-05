import React from 'react';
import {connect} from 'react-redux';

class CompanyDetails extends React.Component{
	render(){
		if(!this.props.company){
			return (<h4></h4>);
		}
		
		return(
			<div class="well">
			<img class="img-circle" src={this.props.company.cpic} width={50} height={50}/>
			<h3>Company Name:{this.props.company.company}</h3>
			<h5>Position: {this.props.company.position}</h5>
			<h5>Location: {this.props.company.location}</h5>
			<div class="jumbotron"><b>Interview Questions</b>{this.props.company.questions}</div>
			</div>
		);
	}
	
}
function mapStateToProps(state){
	return {company: state.activeCompany};
}

export default connect(mapStateToProps)(CompanyDetails);