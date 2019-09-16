import React from 'react';

import {View, SafeAreaView, StatusBar,ScrollView} from 'react-native';
import {Text,Container,Header,Body,Icon,Content,Right,Grid,Row,Col} from 'native-base';
import {Color,Styles} from '../../theme';

import {Indicator} from '../../components/BottomBar';
import Svg, {Circle, LinearGradient, Stop} from 'react-native-svg';
import {Bag, Coin, List, New, Trophy} from '../../Icons';
import {Card, NewUserBanner} from '../../components/Cards';

import {Product, ProductCategory} from '../../components/Product';



const style={
    searchContainer:{
        backgroundColor: Color.white,
        borderRadius:25,
        alignSelf:"stretch",
        width:null,
        height:35,
        paddingRight:16,
        paddingLeft:16,
        flexDirection:"row",
        alignItems:"center"
    },
    searchText:{
        fontFamily:"Roboto-Regular",
    },
    categories:{
        flexDirection: "row",
        justifyContent:"space-around",
        marginTop:5,
        marginBottom:5,
        marginLeft:10,
        marginRight:10
    },
    categoryContainer:{
        width:45,
        height:45,
        borderRadius:45/2,
        justifyContent: "center",
        alignItems:"center"
    },
    category:{
        alignItems: "center"
    },
    categoryText:{
        color:"black",
        fontFamily:"Roboto-Regular",
        fontSize: 12,
        marginTop: 5
    }
};
class HomeScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={{flex:1,}}>

                <Header searchBar rounded androidStatusBarColor={Color.primary}
                        style={{backgroundColor:Color.primary}}  >
                    <StatusBar barStyle="light-content" backgroundColor={Color.primary} />
                    <Body style={{flexGrow:10}}>
                        <View style={style.searchContainer}>
                            <Icon name={"search"} type={"EvilIcons"}
                                  color={Color.dark}
                                  fontSize={20}
                                  allowFontScaling={true}/>
                                  <Text note style={style.searchText}>Explore</Text>
                        </View>
                    </Body>
                    <Right style={{margin:5}}>
                        <Icon name={"bell"}
                              allowFontScaling={true}
                              type={"SimpleLineIcons"}
                              style={{color:"white",fontSize:20}}/>
                              <Indicator value={10}/>
                    </Right>
                </Header>
                <Container style={{backgroundColor:Color.background,paddingBottom:56}}>
                    <Content>
                        <View style={style.categories}>
                            <Category name={"Categories"}
                                      icon={<List color={"white"} size={22}/>}
                                      startColor={Color.pinkish}
                                      endColor={Color.orange}

                            />
                            <Category name={"New Arrivals"}
                                      icon={<New color={"white"} size={24}/>}
                                      startColor={Color.red}
                                      endColor={Color.pinkish}

                            />
                            <Category name={"Coin Rewards"}
                                      icon={<Coin color={"white"} size={22}/>}
                                      startColor={Color.yellow}
                                      endColor={Color.orange}

                            />
                            <Category name={"Top Selection"}
                                      icon={<Trophy color={"white"} size={22}/>}
                                      startColor={Color.blue}
                                      endColor={Color.twitterBlue}

                            />
                            <Category name={"Freebies"}
                                      icon={<Bag color={"white"} size={22}/>}
                                      startColor={Color.success}
                                      endColor={Color.success}

                            />
                        </View>
                        {/*ad banner*/}
                        <NewUserBanner/>
                        {/*flash sales*/}
                        <Card>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Icon name={"flash-circle"}
                                      type={"MaterialCommunityIcons"}
                                      style={{color:Color.pinkish,marginRight:5}}
                                      size={15}/>
                                      <Text style={[Styles.titleText,{fontWeight: "bold"}]}>Flash Sales</Text>
                            </View>
                           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                               <Product/>
                               <Product/>
                               <Product/>
                               <Product/>
                           </ScrollView>
                        </Card>
                        {/*featured categories*/}
                        <Text style={[Styles.titleText,
                            {marginLeft:10,marginTop:5,fontWeight:"bold"}]}>Featured Categories
                        </Text>
                        <Grid>
                            <Col>
                                <Row style={{flexWrap: 'wrap',alignItems: 'flex-start',justifyContent:"space-around"}}>
                                    <ProductCategory name={"Bananas"} image={"https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-970-80.jpg"}/>
                                    <ProductCategory name={"Television"} image={"https://cdn.shopify.com/s/files/1/2660/5202/products/j0hzrhyh0ccntu3xrwtq_e92d2e9a-ec4d-430c-ba3c-2fc57f5eda02_200x.jpg?v=1537306446"}/>
                                    <ProductCategory name={"Television"} image={"https://cdn.shopify.com/s/files/1/2660/5202/products/j0hzrhyh0ccntu3xrwtq_e92d2e9a-ec4d-430c-ba3c-2fc57f5eda02_200x.jpg?v=1537306446"}/>
                                    <ProductCategory name={"Television"} image={"https://cdn.shopify.com/s/files/1/2660/5202/products/j0hzrhyh0ccntu3xrwtq_e92d2e9a-ec4d-430c-ba3c-2fc57f5eda02_200x.jpg?v=1537306446"}/>
                                    <ProductCategory name={"Television"} image={"https://cdn.shopify.com/s/files/1/2660/5202/products/j0hzrhyh0ccntu3xrwtq_e92d2e9a-ec4d-430c-ba3c-2fc57f5eda02_200x.jpg?v=1537306446"}/>
                                    <ProductCategory name={"Television"} image={"https://cdn.shopify.com/s/files/1/2660/5202/products/j0hzrhyh0ccntu3xrwtq_e92d2e9a-ec4d-430c-ba3c-2fc57f5eda02_200x.jpg?v=1537306446"}/>
                                    <ProductCategory name={"Television"} image={"https://cdn.shopify.com/s/files/1/2660/5202/products/j0hzrhyh0ccntu3xrwtq_e92d2e9a-ec4d-430c-ba3c-2fc57f5eda02_200x.jpg?v=1537306446"}/>
                                </Row>

                            </Col>
                        </Grid>


                    </Content>
                </Container>
            </SafeAreaView>
        );
    }
}

//name,icon(node),color
const Category=(props)=>{
    return(
        <View style={style.category}>
            <View style={[style.categoryContainer]}>
                <Svg width={50} height={50} style={{position:"absolute"}} >
                    <Circle cx="25" cy="25" r="25" fill="url(#grad)" />
                    <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <Stop offset="0%" stopColor={props.startColor} stopOpacity=".2" />
                        <Stop offset="100%" stopColor={props.endColor} stopOpacity="1" />
                    </LinearGradient>
                </Svg>
                {
                    props.icon
                }
            </View>
            <Text style={style.categoryText}>{props.name}</Text>
        </View>
    )
};

export default HomeScreen;
