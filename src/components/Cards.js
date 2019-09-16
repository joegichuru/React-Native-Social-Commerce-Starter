import React from "react"
import {View} from "react-native"
import {} from "nachos-ui"
import {Color} from '../theme';
import {Text,Icon} from "native-base"
const style={
    cardContainer:{
        alignSelf:"stretch",
        padding:6,
        backgroundColor:"white",
        borderRadius:8,
        cornerRadius:8,
        elevation: 0.2,
    },

    newUserContainer:{
        alignSelf:"stretch",
        padding:8,
        backgroundColor:Color.deepRed,
        borderRadius:8,
        cornerRadius:8,
        elevation: 0.2,
    },
    btn:{
        backgroundColor:"white",
        borderRadius:20,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:4,
        paddingBottom:4,
        marginTop:30,
        alignSelf:"center",
        maxWidth:250,
        flexDirection:"row",
        alignItems:"center"
    },
    btnTxt:{
        fontSize:12,
        fontFamily:"Roboto-Light"
    }
};
export const Card=(props)=>{
    const {width=null,height=100,margin=10}=props;
    return(
        <View style={[style.cardContainer,{width,margin}]}>
            {props.children}

        </View>
    )
};

export const NewUserBanner=(props)=>{
    const {width=null,height=100,margin=10}=props;
    return(
        <View style={[style.newUserContainer,{width,margin}]}>
            <Text style={{color:"white",fontSize:14}}>Welcome joseph!</Text>
            <Text style={{color:"white",fontSize:12}}>Enjoy special prices and get new user discounts and coupons</Text>
            <View style={style.btn}>
                <Text style={style.btnTxt}>Check out this benefits</Text>
                <Icon name={"arrow-right"}
                      size={18}
                      style={{color:Color.red}}
                      type={"EvilIcons"}/>
            </View>
        </View>
    )
};

