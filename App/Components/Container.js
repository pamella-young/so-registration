import React from 'react'
import { View } from 'react-native'
import { DOUBLE_BASE_PADDING } from '../Themes/Metrics'

const Container = ({children, style}) => {
    return (
        <View style={[{ padding: DOUBLE_BASE_PADDING }, style]}>
            {children}
        </View>
    )
}

export default Container