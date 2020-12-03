import React, { Component } from 'react';
import {
    Alert,
    LayoutAnimation,
    TouchableOpacity,
    Dimensions,
    Image,
    UIManager,
    KeyboardAvoidingView,
    StyleSheet,
    ScrollView,
    Text,
    View,
} from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { registerStyle as styles} from '../styles/register';
import { RegisterInput } from '../types';
import { userRegister } from '../redux/actions/userAction';

import {LinearGradient} from 'react-native-linear-gradient';
import { FormInput } from '../components/auth/FormInput';

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

const USER_COOL = require('../assets/images/user-cool.png');
const USER_STUDENT = require('../assets/images/user-student.png');
const USER_HP = require('../assets/images/user-hp.png');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Register extends Component<any, any> {
    emailInput: any;
    passwordInput: any;
    confirmationPasswordInput: any;
    firstNameInput: any;
    lastNameInput: any;
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: false,
            selectedType: null,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmationPassword: '',
            emailValid: true,
            passwordValid: true,
            firstNameValid: true,
            lastNameValid: true,
            confirmationPasswordValid: true,
        };

        this.setSelectedType = this.setSelectedType.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.validateConfirmationPassword = this.validateConfirmationPassword.bind(
            this
        );
        this.signup = this.signup.bind(this);
        this.validateFirstName = this.validateFirstName.bind(this);
    }

    signup() {
        LayoutAnimation.easeInEaseOut();
        const emailValid = this.validateEmail();
        const passwordValid = this.validatePassword();
        const confirmationPasswordValid = this.validateConfirmationPassword();
        const firstNameValid = this.validateFirstName();
        const lastNameValid = this.validateLastName();
        console.log(this.state)
        if (
            emailValid &&
            passwordValid &&
            confirmationPasswordValid &&
            firstNameValid &&
            lastNameValid
        ) {
            const input: RegisterInput = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.confirmationPassword,
                isActive: true
            }
            userRegister(input)
        }
    }
    validateFirstName() {
        const { firstName } = this.state;
        const firstNameValid = firstName.length > 0;
        LayoutAnimation.easeInEaseOut();
        this.setState({firstNameValid})
        firstNameValid || this.firstNameInput.shake();
        return firstNameValid;
    }
    validateLastName() {
        const { lastName } = this.state;
        const lastNameValid = lastName.length > 0;
        LayoutAnimation.easeInEaseOut();
        this.setState({lastNameValid})
        lastNameValid || this.lastNameInput.shake();
        return lastNameValid;
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
        const passwordValid = password.length > 8;
        LayoutAnimation.easeInEaseOut();
        this.setState({ passwordValid });
        passwordValid || this.passwordInput.shake();
        return passwordValid;
    }

    validateConfirmationPassword() {
        const { password, confirmationPassword } = this.state;
        const confirmationPasswordValid = password === confirmationPassword;
        LayoutAnimation.easeInEaseOut();
        this.setState({ confirmationPasswordValid });
        confirmationPasswordValid || this.confirmationPasswordInput.shake();
        return confirmationPasswordValid;
    }

    setSelectedType = (selectedType: any) =>
        LayoutAnimation.easeInEaseOut() || this.setState({ selectedType });

    render() {
        const {
            isLoading,
            selectedType,
            confirmationPassword,
            email,
            emailValid,
            password,
            passwordValid,
            confirmationPasswordValid,
            firstName,
            firstNameValid,
            lastName,
            lastNameValid
        } = this.state;

        return (
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={styles.container}
            >
                <View
                    style={styles.formContainer}
                >
                    <Text style={styles.signUpText}>Sign up</Text>
                    <Text style={styles.whoAreYouText}>WHO YOU ARE ?</Text>
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
                            refInput={(input: any) => (this.firstNameInput = input)}
                            icon="user"
                            value={firstName}
                            onChangeText={(firstName: any) => this.setState({ firstName })}
                            placeholder="First name"
                            returnKeyType="next"
                            errorMessage={
                                firstNameValid ? null : "Your first name can't be blank"
                            }
                            onSubmitEditing={() => {
                                this.validateFirstName();
                                this.lastNameInput.focus();
                            }}
                        />
                        <FormInput
                            refInput={(input: any) => (this.lastNameInput = input)}
                            icon="user"
                            value={lastName}
                            onChangeText={(lastName: any) => this.setState({ lastName })}
                            placeholder="Last name"
                            returnKeyType="next"
                            errorMessage={
                                lastNameValid ? null : "Your last name can't be blank"
                            }
                            onSubmitEditing={() => {
                                this.validateLastName();
                                this.emailInput.focus();
                            }}
                        />
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
                                this.confirmationPasswordInput.focus();
                            }}
                        />
                        <FormInput
                            refInput={(input: any) => (this.confirmationPasswordInput = input)}
                            icon="lock"
                            value={confirmationPassword}
                            onChangeText={(confirmationPassword: any) =>
                                this.setState({ confirmationPassword })
                            }
                            placeholder="Confirm Password"
                            secureTextEntry
                            errorMessage={
                                confirmationPasswordValid
                                    ? null
                                    : 'The password fields are not identics'
                            }
                            returnKeyType="go"
                            onSubmitEditing={() => {
                                this.validateConfirmationPassword();
                                this.signup();
                            }}
                        />
                    </View>
                    <Button
                        loading={isLoading}
                        title="SIGNUP"
                        containerStyle={{ flex: -1 }}
                        buttonStyle={styles.signUpButton}
                        linearGradientProps={{
                            colors: ['#FF9800', '#F44336'],
                            start: { x: 1, y: 0 },
                            end: { x: 0.2, y: 0 },
                        }}
                        ViewComponent={LinearGradient}
                        titleStyle={styles.signUpButtonText}
                        onPress={this.signup}
                        disabled={isLoading}
                    />
                    <Text style={styles.alreadyAccountText}>
                        Already have an account.
                    </Text>
                    <Button
                        title="Login here"
                        titleStyle={styles.loginHereText}
                        containerStyle={{ flex: -1 }}
                        buttonStyle={{ backgroundColor: 'transparent' }}
                        useForeground
                        onPress={() => this.props.navigation.navigate('Login')}
                        // onPress={() => this.setState({isLoading: true})}
                    />
                </View>
            </ScrollView>
        );
    }
}

export const UserTypeItem = (props: any) => {
    const { image, label, labelColor, selected, ...attributes } = props;
    return (
        <TouchableOpacity {...attributes}>
            <View
                style={[
                    styles.userTypeItemContainer,
                    selected && styles.userTypeItemContainerSelected,
                ]}
            >
                <Text style={[styles.userTypeLabel, { color: labelColor }]}>
                    {label}
                </Text>
                <Image
                    source={image}
                    style={[
                        styles.userTypeMugshot,
                        selected && styles.userTypeMugshotSelected,
                    ]}
                />
            </View>
        </TouchableOpacity>
    );
};

