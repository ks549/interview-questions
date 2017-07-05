import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Selectuser} from '../actions/index';

class Userlist extends React.Component{
	render(){
		return (
			<div class="wells">
				<ul>
					{this.props.users.map(t=>(<li key={t.id} onClick={()=>this.props.Selectuser(t)}>
						
						<h3> {t.first} {t.last}</h3>
						</li>))}
				</ul>
			</div>
		);
	}
}
function mapStateToProps(state){
	return {
		users:state.users
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({ Selectuser:Selectuser},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Userlist);