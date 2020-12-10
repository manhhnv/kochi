import { Icon, Text } from 'native-base';
import React, { useEffect, useState } from 'react'
import { Alert, Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('screen')
const CountDown = ({time, timeoutFlag, setTimeoutFlag, finished}: any) => {
    const minutes = parseInt(time) / 60;
    const [m, setM]: any = useState(minutes-1);
    const [s, setS]: any = useState(59);
    useEffect(() => {
        if ((s > 0 || m > 0) && finished == false) {
            const interval = setInterval(() => {
                setS((prevState: any) => prevState-1)
                if (s == 1 && m > 0) {
                    setS(59)
                    setM((prevState: any) => prevState-1)
                }
            }, 1000)
            return () => clearInterval(interval)
        }
        else {
            setTimeoutFlag(true)
        }
    })
    return (
        <React.Fragment>
            <Text style={[styles.timeout, {left: 0.45*width}]}>
                {m >= 10 ? m : '0'+m} : {s >= 10 ? s : '0'+s}
                {m == 0 && s == 0 ? Alert.alert("Hết giờ 🕒"): null}
            </Text >
            <Icon name="time" style={[styles.timeout, {left: 0.35*width, fontSize: 25}]}/>
        </React.Fragment>
    )
}
const styles = StyleSheet.create({
    timeout: {
        position: "absolute",
        top: -0.045*height,
        zIndex: 1,
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
    }
});
export default CountDown
