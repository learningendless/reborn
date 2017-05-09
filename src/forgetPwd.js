import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native'

export default class ForgetPwd extends Component {
    constructor(props) {
        super(props);
    }
    _pressBack(){
        const { navigator } = this.props;
        if(navigator){
            navigator.pop();
        }
    }
    render() {
        return (
            <View>
                <Text onPress={this._pressBack.bind(this)}>返回</Text>
                <Text>忘记密码页面</Text>
            </View>
        )
    }
}