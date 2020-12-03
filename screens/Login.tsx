import React, { Component } from 'react';
import {
    LayoutAnimation,
    UIManager,
    KeyboardAvoidingView,
    ScrollView,
    Text,
    View,
} from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import {styles} from '../styles/login';
import { userLogin } from '../redux/actions/userAction';

import { LinearGradient } from 'react-native-linear-gradient';
import { LoginInput } from '../types';
UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

const USER_COOL = require('../assets/images/user-cool.png');
const USER_STUDENT = require('../assets/images/user-student.png');
const USER_HP = require('../assets/images/user-hp.png');
import { connect } from 'react-redux';
import { FormInput } from '../components/auth/FormInput';
import { UserTypeItem } from '../components/auth/UserTypeItem';
class Login extends Component<any, any> {
    emailInput: any;
    passwordInput: any;
    confirmationPasswordInput: any;
    constructor(props: any) {
        super(props);

        this.state = {
            isLoading: false,
            selectedType: null,
            email: '',
            password: '',
            emailValid: true,
            passwordValid: true,
        };

        this.setSelectedType = this.setSelectedType.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.login = this.login.bind(this);
    }

    login() {
        LayoutAnimation.easeInEaseOut();
        const emailValid = this.validateEmail();
        const passwordValid = this.validatePassword();
        if (
            emailValid &&
            passwordValid
        ) {
           const input: LoginInput = {
               email: this.state.email,
               password: this.state.password
           }
           this.props.userLogin(input)
        }
    }

    

    validateEmail() {
        const { email } = this.state;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailValid = re.test(email);
        LayoutAnimation.easeInEaseOut();
        this.setState({ emailValid });
        emailValid || this.emailInput.shake();
        return emailValid;
    }

    validatePassword() {
        const { password } = this.state;
        const passwordValid = password.length >= 8;
        LayoutAnimation.easeInEaseOut();
        this.setState({ passwordValid });
        passwordValid || this.passwordInput.shake();
        return passwordValid;
    }


    setSelectedType = (selectedType: any) =>
        LayoutAnimation.easeInEaseOut() || this.setState({ selectedType });
    componentDidMount() {
        console.log(this.props.user)
    }
    render() {
        const {
            isLoading,
            selectedType,
            email,
            emailValid,
            password,
            passwordValid,
        } = this.state;
    
        return (
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={styles.container}
            >
                <KeyboardAvoidingView
                    behavior="position"
                    contentContainerStyle={styles.formContainer}
                >
                    <Text style={styles.signUpText}>Login</Text>
                    <View style={styles.userTypesContainer}>
                        <UserTypeItem
                            label="PARENT"
                            labelColor="#ECC841"
                            image={USER_COOL}
                            onPress={() => this.setSelectedType('parent')}
                            selected={selectedType === 'parent'}
                        />
                        <UserTypeItem
                            label="STUDENT"
                            labelColor="#2CA75E"
                            image={USER_STUDENT}
                            onPress={() => this.setSelectedType('child')}
                            selected={selectedType === 'child'}
                        />
                        <UserTypeItem
                            label="TEACHER"
                            labelColor="#36717F"
                            image={USER_HP}
                            onPress={() => this.setSelectedType('teacher')}
                            selected={selectedType === 'teacher'}
                        />
                    </View>
                    <View style={{ width: '80%', alignItems: 'center' }}>
                        <FormInput
                            refInput={(input: any) => (this.emailInput = input)}
                            icon="envelope"
                            value={email}
                            onChangeText={(email: any) => this.setState({ email })}
                            placeholder="Email"
                            keyboardType="email-address"
                            returnKeyType="next"
                            errorMessage={
                                emailValid ? null : 'Please enter a valid email address'
                            }
                            onSubmitEditing={() => {
                                this.validateEmail();
                                this.passwordInput.focus();
                            }}
                        />
                        <FormInput
                            refInput={(input: any) => (this.passwordInput = input)}
                            icon="lock"
                            value={password}
                            onChangeText={(password: any) => this.setState({ password })}
                            placeholder="Password"
                            secureTextEntry
                            returnKeyType="next"
                            errorMessage={
                                passwordValid ? null : 'Please enter at least 8 characters'
                            }
                            onSubmitEditing={() => {
                                this.validatePassword();
                                this.login()
                            }}
                        />
                    </View>
                    <Button
                        loading={isLoading}
                        title="LOGIN"
                        containerStyle={{ flex: -1 }}
                        buttonStyle={styles.signUpButton}
                        linearGradientProps={{
                            colors: ['#FF9800', '#F44336'],
                            start: { x: 1, y: 0 },
                            end: { x: 0.2, y: 0 },
                        }}
                        ViewComponent={LinearGradient}
                        titleStyle={styles.signUpButtonText}
                        onPress={this.login}
                        disabled={isLoading}
                    />
                </KeyboardAvoidingView>
                <View style={styles.loginHereContainer}>
                    <Text style={styles.alreadyAccountText}>
                        Do not have an account.
                    </Text>
                    <Button
                        title="Register now"
                        titleStyle={styles.loginHereText}
                        containerStyle={{ flex: -1 }}
                        buttonStyle={{ backgroundColor: 'transparent' }}
                        useForeground
                        onPress={() => this.props.navigation.navigate('Register')}
                    />
                </View>
            </ScrollView>
        );
    }
}
const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        userLogin: (input: LoginInput) => dispatch(userLogin(input))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Login));

