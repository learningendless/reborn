import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    Alert,
} from 'react-native'
import Util from './common/util'

export default class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        Alert.alert(props.name)
        this.state={
            id:props.name
        }
    }
    /*componentDidMount() {
        this.setState({
            id:this.props.name
        })
    }*/
    pressBack() {
        const { navigator } = this.props;
        if(navigator){
            navigator.pop();
        }
    }
    render() {
        return (
            <View>
                <View style={styles.backButton}>
                    <Text style={styles.backText} onPress={this.pressBack.bind(this)}>返回</Text>
                </View>
                <View style={styles.articleContent}>
                    <Text>
                        {this.state.id}
                    </Text>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    backButton:{
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        backgroundColor:'#FF9933'
    },
    backText:{
        color:'#ffffff',
        fontSize:16
    },
    articleContent:{
        paddingTop:30
    }
})