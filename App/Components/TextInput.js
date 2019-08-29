import React from 'react'
import { View, Text } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { PRIMARY } from '../Themes/Colors';

const CustomTextField = (props) => {
    const { label, style } = props
    return (
        <View style={style} >
            <TextField label={label} tintColor={PRIMARY} {...props} />
        </View>
    )
}

export default CustomTextField