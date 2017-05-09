import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    Image,
    Dimensions,
    ScrollView,
    Alert,
    FlatList
} from 'react-native'

var screenWidth=Dimensions.get('window').width;
var dataList={datas:[
    {image:require("./../../image/a.jpg"),titleName:"则是一个的是点击供货看是否是点击供货看擐甲挥戈电话",learnCount:"500"},
    {image:require("./../../image/b.jpg"),titleName:"时代峰峻第几个",learnCount:"1500"},
    {image:require("./../../image/c.jpg"),titleName:"世纪东方十多个",learnCount:"300"},
    {image:require("./../../image/d.jpg"),titleName:"上岛咖啡里大概",learnCount:"500"},
    {image:require("./../../image/a.jpg"),titleName:"则是一个的是点击供货看是否是点击供货看擐甲挥戈电话",learnCount:"500"},
    {image:require("./../../image/b.jpg"),titleName:"时代峰峻第几个",learnCount:"1500"},
    {image:require("./../../image/c.jpg"),titleName:"世纪东方十多个",learnCount:"300"},
    {image:require("./../../image/d.jpg"),titleName:"上岛咖啡里大概",learnCount:"500"},
    {image:require("./../../image/a.jpg"),titleName:"则是一个的是点击供货看是否是点击供货看擐甲挥戈电话",learnCount:"500"},
    {image:require("./../../image/b.jpg"),titleName:"时代峰峻第几个",learnCount:"1500"},
    {image:require("./../../image/c.jpg"),titleName:"世纪东方十多个",learnCount:"300"},
    {image:require("./../../image/d.jpg"),titleName:"上岛咖啡里大概",learnCount:"500"},
    ]};
var dataList1={datas:[
    {image:require("./../../image/a1.png"),titleName:"1111111111",learnCount:"500"},
    {image:require("./../../image/b.jpg"),titleName:"222222",learnCount:"1500"},
    {image:require("./../../image/c.jpg"),titleName:"33333333333",learnCount:"300"},
    ]};
var imgs=[require("./../../image/a.jpg"),
    require("./../../image/b.jpg"),
    require("./../../image/c.jpg"),
    require("./../../image/d.jpg"),
    require("./../../image/a.jpg"),
    require("./../../image/b.jpg"),
    require("./../../image/c.jpg"),
    require("./../../image/d.jpg"),
    require("./../../image/a.jpg"),
    require("./../../image/b.jpg"),
    require("./../../image/c.jpg"),
    require("./../../image/d.jpg"),]

export default class DataList extends Component{
    constructor(props){
        super(props);
        //const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged: function(row1, row2) {return row1 !== row2}}),
            /*ds.cloneWithRows(dataList.datas)*/
        }
    }
    componentDidMount(){
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(dataList.datas),
        });
    }
    render(){
        return(
            <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:20}}>
                <View style={styles.showlist}>
                    <ScrollView>
                    <ListView
                        onEndReached={this._onEndReached.bind(this)}
                        contentContainerStyle={styles.list}
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}/>
                        </ScrollView>
                </View>
            </View>
        )
    }
    _onEndReached(){
       /* Alert.alert("提示","已经滑动到底部");
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(dataList.datas),
        });*/
    }
    _renderRow(datas,sectionID: number, rowID: number) {
        var imgSource = imgs[rowID];
        return(
            <View style={styles.imgTag}>
                <Image source={imgSource} style={{height:80,width:screenWidth/2-40,}}/>
                <Text style={styles.titleName}>{datas.titleName}</Text>
                <Text>{datas.learnCount}</Text>
            </View>
        )
    }

}

var styles=new StyleSheet.create({
    showlist:{
        width:screenWidth-20,
        marginLeft:10,
        marginBottom:10
    },
    list:{
        marginTop:10,
        justifyContent:"space-around",
        flexDirection:'row',
        flexWrap:'wrap'
    },
    imgTag:{
        width:screenWidth/2-40,
        marginTop:10,
        marginBottom:20
    },
    titleName:{
        height:38
    }
})