import React from 'react';
import {SafeAreaView,FlatList,View,Text,StyleSheet,ScrollView,TouchableOpacity,Dimensions,Alert} from 'react-native';
import NewsCard from './components/NewsCard';

import news_data from "./news_data.json";
import news_banner_data from "./news_banner_data.json";
import news_header_data from "./news_header_data.json";

function App(): JSX.Element {
  const renderNews = ({item}:{item : any}) => <NewsCard news={item} />;
  return (
    <SafeAreaView style={style.container}>
        <Text style={style.headerText}>News App</Text>
        <FlatList 
                  //!Banner
        //To add on top of the ScrollView
        // ListHeaderComponent={() =>
        //   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        //     {news_banner_data.map(bannerNews => (<Image style={style.banner_image} source={{uri: bannerNews.imageUrl}}/>
        //     ))}
        //   </ScrollView>
        // }
        ListHeaderComponent={()=>
          <View style={style.banner}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {news_header_data.map(headertitle => (
                <TouchableOpacity
                onPress={() => Alert.alert('Hello ' + headertitle.title)}
                >
                  <Text style={style.deneme}>{headertitle.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        }
          // if there is a different id name we need to use
          keyExtractor={(item)=> item.u_id.toString()}
          data={news_data}
          renderItem={renderNews}
        />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#eceff1"
  },
  banner_image:{
    height: Dimensions.get("window").height/5,
    width: Dimensions.get("window").width/2,
  },
  headerText:{
    fontWeight:"bold",
    fontSize:50,
    textAlign:'center',
    marginBottom:10,
    color:"black"
  },
  deneme:{
    width: 100,
    backgroundColor:"lightgray",
    padding:15,
    marginLeft:10,
    textAlign:'center',
    fontSize:15,
    fontWeight:'bold',
    borderRadius:10
  },
  banner:{
    width:Dimensions.get("window").width - 10,

  }
})

export default App;
