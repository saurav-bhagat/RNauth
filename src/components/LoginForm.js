import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from './../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor:'#fff' }}>
                    <Text style={styles.errorTextStyle}> { this.props.error } </Text>
                </View>
            );
        }
    }
    renderButton() {
        if(this.props.loading) {
            return <Spinner size="large" />
        }
        return (
            <Button
                onPress={this.onButtonPress.bind(this)}
            >
                Login
            </Button>
        );
    }
    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        value={this.props.email}
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        value={this.props.password}
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>

                 { this.renderError() }

                <CardSection>
                    { this.renderButton() }
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle : {
        color : 'red',
        fontSize: 20,
        alignSelf: 'center'
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
    //here we can do destructuring
};

export default connect(mapStateToProps, { emailChanged,passwordChanged,loginUser })(LoginForm);