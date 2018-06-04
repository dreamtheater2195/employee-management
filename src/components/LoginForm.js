import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CardSection, Card, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux';
class LoginForm extends Component {

    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
    }

    onButtonPress = () => {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError = () => {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton = () => {
        if (this.props.loading) {
            return <Spinner size="large" />
        } else {
            return (
                <Button onPress={this.onButtonPress}>
                    Login
                </Button>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
})

const mapStateToProps = ({ auth }) => {
    return {
        email: auth.email,
        password: auth.password,
        error: auth.error,
        loading: auth.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        emailChanged: (text) => dispatch(emailChanged(text)),
        passwordChanged: (text) => dispatch(passwordChanged(text)),
        loginUser: (user) => dispatch(loginUser(user))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);