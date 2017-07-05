import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Selectuser} from '../actions/index';
import {SelectCompany} from '../actions/index';

class CompanyList extends React.Component{
	render(){
		if(!this.props.user){
			return (<h4></h4>);
		}
		return (
			<div class="well">
				<table><tbody>
					{this.props.user.company.map(t=>(<tr key={t.cid}>
						<td><img class="img-circle" src={t.cpic} width={50} height={50} onClick={()=>this.props.SelectCompany(t)}/><b>{t.company}</b><hr/></td>
						</tr>))}
			</tbody></table>

			<button class="btn btn-success">+</button>

			</div>
		);
	}
}
function mapStateToProps(state){
	return {
		user:state.activeUser
	};
}


function matchDispatchToProps(dispatch){
	return bindActionCreators({ SelectCompany:SelectCompany},dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps)(CompanyList);