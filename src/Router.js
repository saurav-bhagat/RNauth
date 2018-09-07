import React, { Component } from 'react';
import { Scene , Router, Actions } from 'react-native-router-flux';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="auth">
                        <Scene key="login" component={LoginForm} title="Please Login" initial />
                    </Scene>
                    <Scene key="main">
                        <Scene 
                            key="employeeList" 
                            component={EmployeeList} 
                            title="Employees" 
                            rightTitle="Add"
                            onRight = {() => Actions.employeeCreate() }
                            initial
                        />
                        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
                    </Scene>
                </Scene>
            </Router>
        );
    }
};

export default RouterComponent;
