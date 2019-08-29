import React from 'react'
import { View, Platform, TouchableNativeFeedback, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { DOUBLE_BASE_PADDING, BORDER_RADIUS } from '../Themes/Metrics';
import { PEACH_PINK, WHITE, PRIMARY } from '../Themes/Colors';

const Button = ({onPress, disabled, children}) => {

    const NativeFeedbackProps = () => {
        if (Platform.OS === 'android') {
            if (Platform.Version >= 21) {
              props.background = TouchableNativeFeedback.Ripple(GRAY)
            } else {
              props.background = TouchableNativeFeedback.SelectableBackground()
            }
          } else {
            props.underlayColor = 'transparent'
          }
    }

    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
    return (
        <Touchable
            onPress={onPress}
            disabled={disabled}
            {...NativeFeedbackProps}
        >
            <View style={styles.container}>
                <Text style={styles.textStyle}>{children.toUpperCase()}</Text>
            </View>
        </Touchable>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: DOUBLE_BASE_PADDING,
        alignItems: 'center',
        backgroundColor: PRIMARY,
        borderRadius: BORDER_RADIUS,
    },
    textStyle: {
        fontSize: 16,
        color: WHITE,
        fontWeight: 'bold'
    }
})

export default Button