import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    ListView,
    TouchableHighlight,
    Alert,
    ScrollView
} from 'react-native';
import DataList from './dxComponent/listView';
import Swiper from 'react-native-swiper';
import Login from './login'

var screenWidth=Dimensions.get('window').width;
var dataList={datas:[{image:"./../image/a.jpg",titleName:"则是一个的是点击供货看是否是点击供货看擐甲挥戈电话",learnCount:"500"},
                     {image:"./../image/b.jpg",titleName:"时代峰峻第几个",learnCount:"1500"},
                     {image:"./../image/c.jpg",titleName:"世纪东方十多个",learnCount:"300"},
    {image:"./../image/d.jpg",titleName:"上岛咖啡里大概",learnCount:"500"},
    {image:"./../image/a.jpg",titleName:"按时间看到该好点没玩儿点击供货",learnCount:"800"},
    {image:"./../image/c.jpg",titleName:"水电费刚回到家和是点击供货",learnCount:"530"},]}
export  default class Index extends Component{
    constructor(props){
        super(props);
        const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
        this.state={
            dataSource:ds.cloneWithRows(dataList.datas)
        }
    }
    onPressHandler = () => {
        const {click} = this.props;
        click();
    };
    onSearchHandler = ()=>{
        const {searchClick} = this.props;
        searchClick();
    }

    render(){
        return(
            <View>
               <ScrollView>
                <View style={styles.search}>
                    <Text style={styles.searchText}
                          onPress={this.onSearchHandler}>搜索</Text>
                    <Text style={styles.searchTitle}>首页</Text>
                </View>
                <View>
                    <Swiper height={150}  showsButtons={false} autoplay={true}
                            dot={<View style={{width:8,height:8,backgroundColor:'white',borderRadius:4,marginLeft:3,marginRight:3}}></View>}
                            activeDot={<View style={{width:8,height:8,backgroundColor:'orange',borderRadius:4,marginLeft:3,marginRight:3}}></View>}
                            paginationStyle={{bottom:10}}
                    >
                        <Image source={require('./../image/a.jpg')} style={styles.imageSize}/>
                        <Image source={require('./../image/b.jpg')} style={styles.imageSize}/>
                        <Image source={require('./../image/c.jpg')} style={styles.imageSize}/>
                    </Swiper>
                </View>
                <View style={styles.fourLink}>
                    <View>
                        <Image source={require('./../image/a1.png')} style={styles.fourLinkImg}/>
                        <Text style={styles.fourLinkText} onPress={this.onPressHandler}>实战1</Text>
                    </View>
                    <View>
                        <Image source={require('./../image/a2.png')} style={styles.fourLinkImg}/>
                        <Text style={styles.fourLinkText}>实战</Text>
                    </View>
                    <View>
                        <Image source={require('./../image/a3.png')} style={styles.fourLinkImg}/>
                        <Text style={styles.fourLinkText}>实战</Text>
                    </View>
                    <View>
                        <Image source={require('./../image/a4.png')} style={styles.fourLinkImg}/>
                        <Text style={styles.fourLinkText}>实战</Text>
                    </View>
                </View>
                <DataList/>
                   </ScrollView>
            </View>
        )
    }
    renderImg(){
        var imageViews=[];
        for(var i=0;i<3;i++){
            imageViews.push(
                <Image
                    key={i}
                    style={{flex:1}}
                    source={{uri:images[i]}}
                />
            );
        }
        return imageViews;
    }


}
var styles = StyleSheet.create({
    search:{
        flexDirection:'row',
        marginLeft:10,
        height:40
    },
    searchText:{
        fontSize:18,
        width:50,
        marginTop:8
    },
    searchTitle:{
        width:50,
        fontSize:18,
        marginTop:8,
        marginLeft:(Dimensions.get('window').width-70)/2-50
    },
    imageSize:{
        height:150,
        width:screenWidth
    },
    fourLink:{
        marginTop:20,
        marginLeft:25,
        width:screenWidth-50,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    fourLinkImg:{
        width:50,
        height:50
    },
    fourLinkText:{
        width:50,
        textAlign:'center'
    }
})
function _renderRow(datas,sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
    return(
        <TouchableHighlight onPress={() => {
            Alert.alert("提示","我是第"+sectionID+"行")
        }}>
        <View style={{flexDirection:'row',marginTop:10}}>
            <View>
                <Image source={require('./../image/b.jpg')} style={{height:80,width:screenWidth/2-50,marginLeft:10}}/>
            </View>
            <View style={{marginLeft:10,height:80,width:screenWidth/2+30}}>
                <Text style={{height:50,paddingTop:10}}>{datas.titleName}</Text>
                <Text>共有{datas.learnCount}人</Text>
            </View>
        </View>
        </TouchableHighlight>
    )
}
function _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return(
        <View key={`{sectionID}-${rowID}`}
              style={{height: 1, backgroundColor: 'black'}}>
        </View>
    )
}

