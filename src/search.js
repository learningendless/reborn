import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    Dimensions,
    Image,
    Alert,
} from 'react-native'
import Util from './common/util'

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state={
            show:true,
            value:''
        }
    }
    pressBack() {
        const { navigator } = this.props;
        if(navigator){
            navigator.pop();
        }
    }
    searchSubmit(){
        this.setState({
            show:false,
        })
    }
    getValue(text){
        var value=text;
        this.setState({
            value:value
        })
    }
    render() {
        return (
            <View>
                <View style={styles.search}>
                    <View style={styles.searchBody}>
                        <Image source={require('../image/search.png')} style={styles.searchImage}/>
                        <TextInput style={styles.searchInput}
                                   underlineColorAndroid='transparent'
                                   placeholder="请输入搜索关键字"
                                   returnKeyType='search'
                                   onSubmitEditing={this.searchSubmit.bind(this)}
                                   autoFocus={true}
                                   value={this.state.value}
                                   onChangeText={this.getValue.bind(this)}
                                   clearButtonMode="while-editing"></TextInput>
                        {/*clearButtonMode在ios下特有*/}
                    </View>
                    <Text  style={styles.serachCancle}
                        onPress={this.pressBack.bind(this)}>取消</Text>
                </View>
                <View style={styles.searchContent}>
                    {this.state.show?
                        <View>
                            <Text>热门搜索</Text>
                        </View>
                        :
                        <View>
                            <Text>搜索内容{this.state.value}</Text>
                        </View>
                    }
                </View>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    search:{
        marginLeft:10,
        marginTop:20,
        flexDirection:'row',
    },
    searchBody:{
        flexDirection:'row',
        width:Dimensions.get('window').width-70,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#DDDDDD',
        height:40,
        backgroundColor:'#e5e6e8'

    },
    searchImage:{
        width:21,
        height:21,
        marginTop:9,
        marginLeft:5
    },
    searchInput:{
        width:Dimensions.get('window').width-100,
        height:40,
        marginLeft:5
    },
    serachCancle:{
        marginLeft:10,
        marginTop:10
    },
    searchContent:{
        marginTop:20
    }
})