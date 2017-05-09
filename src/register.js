import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback
} from 'react-native';

export default  class Register extends Component{
    //构造函数
    constructor(props){
        super(props);
    }
    _pressLogin(){
        const { navigator } = this.props;
        if(navigator){
            navigator.pop();
        }
    }
    render(){
        return (
            <View style={{height:Dimensions.get('window').height}}>
                <View style={styles.registerTitle}>
                    <Text style={styles.registerTitleInfo}>欢迎注册RN</Text>
                </View>
                <View style={styles.registerBody}>
                    <View style={styles.registerOne}>
                        <TextInput style={styles.registerInput} placeholder={"请输入手机号码"} underlineColorAndroid='transparent'></TextInput>
                    </View>
                    <View style={styles.registerOne}>
                        <TextInput style={styles.registerInput} placeholder={"请填写手机获取的验证码"} underlineColorAndroid='transparent'></TextInput>
                        <Text style={styles.registerValidate}>获取验证码</Text>
                    </View>
                    <View style={styles.registerOne}>
                        <TextInput style={styles.registerInput} placeholder={"密码"} underlineColorAndroid='transparent'></TextInput>
                    </View>
                </View>
                <View style={styles.registerBtns}>
                    <TouchableOpacity style={styles.registerBtnsOne} >
                        <Text style={styles.registerBtnsOneText}>注 册</Text>
                    </TouchableOpacity>
                </View>
                <View  style={styles.registerFooter}>
                    <Text style={styles.registerFooterText}>已有RN账号？</Text>
                    <Text style={styles.registerFooterText} onPress={this._pressLogin.bind(this)}>去登录</Text>
                </View>
            </View>
        );
    }
}
const styles=new StyleSheet.create({
    registerBody:{
        marginTop:20
    },
    registerTitle:{
        flexDirection:'row',
        justifyContent:'center',
        height:60,
        marginTop:100
    },
    registerTitleInfo:{
        fontSize:25,
        fontWeight:'bold'
    },
    registerOne:{
        width:Dimensions.get('window').width-10,
        flexDirection:'row',
        height:50,
        borderBottomWidth:1,
        marginTop:5,
        borderBottomColor:'#CCCCCC',
        backgroundColor:'#ffffff',
    },
    registerLabel:{
        marginLeft:10,
        height:20,
        fontSize:15,
        marginRight:10,
        marginTop:10,
        width:30
    },
    registerInput:{
        marginTop:10,
        marginLeft:10,
        height:40,
        width:Dimensions.get('window').width-130,
        fontSize:16
    },
    registerBtns:{
        marginTop:20
    },
    registerBtnsOne:{
        width:Dimensions.get('window').width-60,
        marginLeft:30,
        justifyContent:'center',
        height:60,
        backgroundColor:'#FF9933',
    },
    registerBtnsOneText:{
        fontSize:18,
        color:'#ffffff',
        width:50,
        marginLeft:(Dimensions.get('window').width-110)/2
    },
    registerValidate:{
        marginTop:15,
        marginLeft:10,
        height:50,
        width:100,
        fontSize:16
    },
    registerFooter:{
        position:'absolute',
        bottom: 80,
        flexDirection:'row',
        justifyContent:'center',
        width:Dimensions.get('window').width,
    },
    registerFooterText:{
        fontSize:20
    }
})

_OnPress=function () {
    console.log("register button test ");
}