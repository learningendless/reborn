
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Navigator,
} from 'react-native';
import Root from './src/root';

export default class dxreborn extends Component {
  render() {
    let defaultName="Root";
    let defaultComponent=Root;
    return (
        /*<View style={styles.container}>
          <Root/>
        </View>*/
        <Navigator
            //初始化组件
            initialRoute={{name:defaultName,component:defaultComponent}}
            // 页面切换效果
            configureScene={(router)=>{
                    return {
                        ...Navigator.SceneConfigs.SwipeFromLeft,
                        gestures:{pop: {} }}//禁用手指左右滑动页面
            }}
            renderScene={(router,navigator)=> {
              let Component=router.component;
              return <Component router={router} navigator={navigator}/>
            }}>
        </Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff'
  }
});

AppRegistry.registerComponent('dxreborn', () => dxreborn);
