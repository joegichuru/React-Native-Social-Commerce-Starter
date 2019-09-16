import React from 'react';
import {View} from 'react-native';
import BoxShadow from './BoxShadow';
import BorderShadow from './BorderShadow';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Svg, {Rect, Defs, LinearGradient, Stop, RadialGradient, Path} from 'react-native-svg';
import {Icon, Text} from 'native-base';
import {Account, Cart, Feed, Home, MessageBubble} from '../Icons';
import {Color} from "../theme/index"

const styles = {
    container: {
        backgroundColor: '#fff',

        position: 'absolute',
        bottom: 0,
        width: widthPercentageToDP("100"),
        height: 56,

    },
    children:{
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        padding:5,
    },
    text:{fontSize:14,fontFamily: "Roboto-Light"}
};
export const BottomBar = (props) => {

    return (
        <View style={styles.container}>
            <Svg height={4} width={widthPercentageToDP("110%")} style={{position: 'absolute', top: -4}}>
                <Defs>
                    <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="100%">
                        <Stop offset="0" stopColor="rgb(255,255,255)" stopOpacity="0"/>
                        <Stop offset="1" stopColor="black" stopOpacity=".05"/>
                    </LinearGradient>
                </Defs>
                <Rect x={0} y={0} width={widthPercentageToDP("110%")} height={4} fill="url(#grad)"/>

            </Svg>
           <View style={styles.children}>
               {
                   props.children
               }
           </View>
        </View>
    );
};

//takes active,badge,icon,text,iconType
export class BottomBarItem extends React.Component {
    render() {
        const color = this.props.active ? 'red' : 'black';
        return (
            <View style={{alignItems: "center",justifyItems:"center"}}>
                <Icon style={{color,fontWeight: "100"}}
                      name={this.props.icon}
                      size={40}
                      type={this.props.iconType}/>

                <Text color={color} style={{fontSize:12,fontWeight: "100"}}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}

export class HomeBarItem extends React.Component {
    render() {
        const color = this.props.active ? Color.primary : Color.black;
        const {size=22}=this.props.size;
        return (
            <View style={{alignItems: "center",justifyItems:"center"}}>
                <Home size={size} color={color}/>
                <Text style={[styles.text,{color:color}]}>
                    Home
                </Text>
            </View>
        );
    }
}

export class FeedBarItem extends React.Component {
    render() {
        const color = this.props.active ? Color.primary : Color.black;
        const {size=22}=this.props.size;
        return (
            <View style={{alignItems: "center",justifyItems:"center"}}>
                <Feed size={size} color={color}/>
                <Text style={[styles.text,{color:color}]}>
                    Feed
                </Text>
            </View>
        );
    }
}

export class MessageBarItem extends React.Component {
    render() {
        const color = this.props.active ? Color.primary : Color.black;
        const {size=22}=this.props.size;
        return (
            <View style={{alignItems: "center",justifyItems:"center"}}>
                <MessageBubble size={size} color={color}/>
                <Text style={[styles.text,{color:color}]}>
                    Messages
                </Text>
            </View>
        );
    }
}

export class CartBarItem extends React.Component {
    render() {
        const color = this.props.active ? Color.primary : Color.black;
        const {size=22}=this.props.size;
        return (
            <View style={{alignItems: "center",justifyItems:"center"}}>

                <Cart size={size} color={color}/>
                <Text style={[styles.text,{color:color}]}>
                    Cart
                </Text>
                <Indicator value={19}/>
            </View>
        );
    }
}

export class AccountBarItem extends React.Component {
    render() {
        const color = this.props.active ? Color.primary : Color.black;
        const {size=22}=this.props.size;
        return (
            <View style={{alignItems: "center",justifyItems:"center"}}>
                <Account size={size} color={color}/>
                <Text style={[styles.text,{color:color}]}>
                    Account
                </Text>
            </View>
        );
    }
}

export const Indicator=(props)=>{
    const style={
        backgroundColor:Color.success,
        alignSelf: "flex-end",
        borderRadius:10,
        paddingLeft:3,
        paddingRight:3,
        position:"absolute",
        height: 16,
        width:22,
        right:-12,top:-6,
        justifyContent: "center",
        justifyItems:"center"
    };
    const text={
        fontSize:10,
        color:Color.white,
        fontFamily:"Roboto-Light",
        alignSelf:"center"
    };
  return(
      <View style={style}>
          <Text style={text}>
              {props.value}
          </Text>
      </View>
  )
};


