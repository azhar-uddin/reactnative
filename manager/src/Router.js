import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene 
						key="login" 
						style={{paddingTop: 60}} 
						component={LoginForm} 
						title="Please Login" 
						initial
					/>
				</Scene>
				<Scene key="main">
					<Scene 
						rightTitle="Add"
						onRight={() => Actions.employeeCreate()}
						key="employeeList" 
						style={{paddingTop: 60}} 
						component={EmployeeList} 
						title="Employees"
						initial
					/>
					<Scene
						key="employeeCreate"
						style={{paddingTop: 60}} 
						component={EmployeeCreate}
						title="Employee Create"
					/>
					<Scene
						key="employeeEdit"
						style={{paddingTop: 60}} 
						component={EmployeeEdit}
						title="Edit Employee"
					/>
				</Scene>

			</Scene>
		</Router>
	);
};

export default RouterComponent;