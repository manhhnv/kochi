import { Button, Fab, Icon, Text, Thumbnail, View } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/userAction';
const USER_HP = require('../assets/images/user-hp.png');
const { width, height } = Dimensions.get('window');
const Profile = (props: any) => {
    const { user, navigation, logout } = props;
    const [showFAB, setShowFAB] = useState(false)
    const heightAni: any = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      Animated.timing(heightAni, {duration: 500, toValue: 0.3*height, useNativeDriver: false, easing: Easing.linear}).start()
    }, [])
    return (
        <React.Fragment>
            {user.token != null ? (
                <View style={styles.profileContainer}>
                    <Animated.View style={[styles.headerProfile, {
                        height: heightAni,
                    }]}>
                        <Thumbnail large source={USER_HP} style={styles.avatar} />
                        <View
                            style={styles.userInfoContentContainer}
                        >
                            <Icon type="AntDesign" name="user" style={styles.nameIcon} />
                            <Text style={styles.userName}>
                                {user.user.firstName + ' ' + user.user.lastName}
                            </Text>
                        </View>
                        <View
                            style={styles.userInfoContentContainer}
                        >
                            <Icon type="AntDesign" name="mail" style={styles.emailIcon} />
                            <Text style={styles.userName}>
                                {user.user.email}
                            </Text>
                        </View>
                    </Animated.View>
                    <Fab
                        active={showFAB}
                        direction="up"
                        style={{ backgroundColor: '#00CE9F' }}
                        position="bottomRight"
                        onPress={() => setShowFAB(!showFAB)}
                    >
                        <Icon type="Entypo" name="dots-three-vertical" />
                        <Button style={{ backgroundColor: '#3B5998' }} onPress={() => setShowFAB(false)}>
                            <Icon type="AntDesign" name="close" />
                        </Button>
                        <Button style={{ backgroundColor: '#fff' }} onPress={() => logout(user.token)}>
                            <Icon type="AntDesign" name="poweroff" style={{ color: 'red' }} />
                        </Button>
                    </Fab>
                </View>
            ) : navigation.navigate("Login")}
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: '#fff',
        flex: 1,
    },
    headerProfile: {
        backgroundColor: '#00CE9F',
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
        marginLeft: 2,
        marginRight: 2
    },
    avatar: {
        marginLeft: 0.38 * width,
        marginTop: 0.21 * height,
        borderWidth: 5,
        borderColor: '#fff',
        height: 100,
        width: 100,
        borderRadius: 47
    },
    userName: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        paddingLeft: 0.05 * width
    },
    userInfoContentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0.12 * height,
        marginLeft: 0.21 * width,
        textAlign: 'center'
    },
    nameIcon: {
        color: 'green',
    },
    emailIcon: {
        color: 'red'
    }

});
const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        logout: (token: string) => dispatch(logout(token))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)