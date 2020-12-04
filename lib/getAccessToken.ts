import AsyncStorage from "@react-native-async-storage/async-storage"

export const getAccessToken = async () => {
    try {
        const tokenStorage = await AsyncStorage.getItem('token')
        if (tokenStorage != null) {
            console.log(tokenStorage)
            return tokenStorage;
        }
    }
    catch(e) {
        console.log(e)
    }
    return '';
}