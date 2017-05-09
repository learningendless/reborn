import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'
import Register from '../register'
import  ForgetPwd from '../forgetPwd'
import Login from '../login'
import ArticleDetail from '../articleDetail'
import Search from '../search'


module.exports={
    //获取屏幕大小
    size:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width
    },
    //页面跳转
    pressSkip:function (self,typeName,params) {
        var component=null;
        var componentName=""
        switch (typeName){
            case "register":
                component=Register;
                componentName="Register";
                break;
            case "forgetPwd":
                component=ForgetPwd;
                componentName="ForgetPwd";
                break;
            case "login":
                component=Login;
                componentName="Login"
                break;
            case "articleDetail":
                component=ArticleDetail;
                componentName="ArticleDetail"
                break;
            case "search":
                component=Search;
                componentName='Search';
                break;
            default:
                component=Login;
                componentName="Login";
                break;
        }
        const { navigator} = self.props;
        if (navigator) {
            if(params){
                navigator.push({
                    name:componentName,
                    component:component,
                    passProps:params,
                })
            }else{
                navigator.push({
                    name:componentName,
                    component:component,
                })
            }

        }
    },
    //页面返回
    pressBack:function (self) {
        const { navigator } = self.props;
        if(navigator){
            navigator.pop();
        }
    },
    ajax: function (portName, successCallback, failCallback) {
        var url='http://192.168.169.60:3000';
        fetch(url+portName)
            .then((response) => response.text())
            .then((responseText) => {
                //回调函数，返回数据消息
                successCallback(responseText);
            })
            .catch(function (err) {
                failCallback(err);
            });
    }
}