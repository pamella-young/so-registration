import { ToastAndroid, Platform } from 'react-native'

export default (Toast = {
    show: message => {
        if(Platform.OS === 'android') {
            return ToastAndroid.show(message, ToastAndroid.SHORT)
        }
    }
})