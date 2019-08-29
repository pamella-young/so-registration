import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { TextInput, Button, Text } from '../Components'
import GLOBAL from '../Data/global'
import { DOUBLE_BASE_MARGIN, SCREEN_WIDTH_PADDING, SCREEN_HEIGHT_PADDING } from '../Themes/Metrics'
import { PEACH } from '../Themes/Colors';
import Toast from '../Components/Toast';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
        }
    }

    onSubmit = () => {
        const { username } = this.state
        GLOBAL.username = username
        if (username === 'admin') GLOBAL.role = 'admin'
        else GLOBAL.role = 'user'

        console.log(GLOBAL)
    }

    render(){
    console.log(this.state.username)
        return (
            <View>
                <View>
                    <View style={{height: SCREEN_HEIGHT_PADDING/3, justifyContent: 'center'}}>
                        <Image source={require('../Assets/logo.png')} style={{ height: 100, width: SCREEN_WIDTH_PADDING }} resizeMode='contain'/>
                    </View>
                    <TextInput
                        label='Name'
                        style={{marginBottom: DOUBLE_BASE_MARGIN}}
                        onChangeText={param => this.setState({username: param})}
                    />
                    <Button onPress={this.onSubmit}>Log In</Button>
                </View>
                
                <View>
                    <Text disabled style={{ alignSelf: 'center', marginTop: DOUBLE_BASE_MARGIN }}>v 0.1.0</Text>
                </View>
            </View>
        )
    }
}

export default Login