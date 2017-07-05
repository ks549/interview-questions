import React from 'react';
import Userlist from '../containers/Userlist';
import UserDetails from '../containers/UserDetails';
import CompanyList from '../containers/CompanyList';
import CompanyDetails from '../containers/CompanyDetails';

class App extends React.Component{

	render(){
		console.log($r);
		return (
				<div>
				<div class="container-fluid jumbotron">
					<div class="container">
						<div class="row">
							<div class="col-sm-4 well">
  							<h3>Select User:</h3>
							<Userlist/>
							 </div>
  							<div class="col-sm-4"><button class="btn btn-success">+</button> </div>
							<div class="col-sm-4 ">
							
							<UserDetails/>
							</div>
						</div>
						
				</div>
				</div>	
				<div class="container">
				<div class="row">
							<div class="col-lg-6">
  								<CompanyList/>
							 </div>
  							<div class="col-lg-6">
								<CompanyDetails/>
							</div>
				</div>
				</div>
				
				</div>
			);
	}
}

export default App; 