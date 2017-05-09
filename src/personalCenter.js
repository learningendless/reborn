import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native'

export default class PersonalCenter extends Component {
    constructor(props) {
        super(props);
    }
    onPressHandler = () => {
        const {click} = this.props;
        click();
    };
    render() {
        return (
            <View style={{marginTop:100}}>
                 <Text onPress={this.onPressHandler}>点我登录</Text>
            </View>
        )
    }
}