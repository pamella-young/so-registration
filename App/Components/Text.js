import React from 'react'
import { Text } from 'react-native'
import { GRAY } from '../Themes/Colors';

const CustomText = (props) => {
    const { children, disabled, style } = props
    const textStyle = []

    if (disabled) textStyle.push({color: GRAY})

    return (
        <Text style={[textStyle, style]}>{children}</Text>
    )
}

export default CustomText