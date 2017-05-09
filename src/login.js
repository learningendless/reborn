import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';

import Util from './common/util'

export default  class Login extends Component{
    //构造函数
    constructor(props){
        super(props);
    }
    pressLogin(){
        Util.ajax("/users/rn",function (data) {
            Alert.alert("返回成功："+data);
        },function (err) {
            Alert.alert("异常：:"+err);
        })
    }
    render(){
        return (
            <View>
                <View>
                    <Text onPress={Util.pressBack.bind(this,this)}>返回</Text>
                </View>
                <View style={styles.loginTitle}>
                    <Text style={styles.loginTitleInfo}>欢迎登录RN</Text>
                </View>
                <View style={styles.loginBody}>
                    <View style={styles.loginOne}>
                       {/* <Text style={styles.loginLabel}>账号</Text>*/}
                        <TextInput style={styles.loginInput}
                                   placeholder={"请输入用户名"}
                                   underlineColorAndroid='transparent'>
                        </TextInput>
                    </View>
                    <View style={styles.loginOne}>
                       {/* <Text style={styles.loginLabel}>密码</Text>*/}
                        <TextInput style={styles.loginInput}
                                   placeholder={"请输入密码"}
                                   underlineColorAndroid='transparent'>
                        </TextInput>
                    </View>
                </View>
                <View style={styles.loginBtns}>
                    <TouchableOpacity style={styles.loginBtnsOne} >
                        <Text style={styles.loginBtnsOneText}
                              onPress={this.pressLogin.bind(this)}>登 录</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.loginBtnsTwo}>
                    <Text onPress={Util.pressSkip.bind(this,this,"forgetPwd")}>忘记密码？</Text>
                    <Text style={styles.loginBtnsTwoRight}
                      onPress={Util.pressSkip.bind(this,this,"register")}>注册</Text>
                </View>
            </View>
        );

    }
}
const styles=new StyleSheet.create({
    loginBody:{
        marginTop:20
    },
    loginTitle:{
        flexDirection:'row',
        justifyContent:'center',
        height:60,
        marginTop:100
    },
    loginTitleInfo:{
        fontSize:25,
        fontWeight:'bold'
    },
    loginOne:{
        width:Dimensions.get('window').width-10,
        flexDirection:'row',
        height:50,
        borderBottomWidth:1,
        marginLeft:5,
        borderBottomColor:'#CCCCCC',
        backgroundColor:'#ffffff',
    },
    loginLabel:{
        marginLeft:10,
        height:20,
        fontSize:15,
        marginRight:10,
        marginTop:15,
        width:30
    },
    loginInput:{
        marginTop:10,
        marginLeft:20,
        height:40,
        width:Dimensions.get('window').width-20,
        fontSize:16
    },
    loginBtns:{
        marginTop:20
    },
    loginBtnsOne:{
        width:Dimensions.get('window').width-60,
        marginLeft:30,
        justifyContent:'center',
        height:50,
        backgroundColor:'#FF9933',

    },
    loginBtnsOneText:{
        fontSize:18,
        color:'#ffffff',
        width:50,
        marginLeft:(Dimensions.get('window').width-110)/2

    },
    loginBtnsTwo:{
        marginLeft:30,
        //marginRight:30,
        width:Dimensions.get('window').width-60,
        marginTop:15,
        height:50,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    loginBtnsTwoRight:{
        marginRight:10
    }
})

_OnPress=function () {
    console.log("login button test ");
}