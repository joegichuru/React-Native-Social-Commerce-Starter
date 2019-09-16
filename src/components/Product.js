import React from 'react';
import {View, Image, NativeModules} from 'react-native';
import {Text} from 'native-base';
import {Color} from '../theme';
import {Badge} from 'nachos-ui';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';

const {DominantColor} = NativeModules;


const style = {
    currency: {
        fontSize: 12,
        fontFamily: 'Roboto-Light',
    },
    amount: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: Color.black,
    },
    badge: {
        alignSelf: 'center',
        margin: 4,
    },
};
export const Product = (props) => {
    return (
        <View style={{alignItems: 'center', marginLeft: 5, marginRight: 5}}>
            <Image
                style={{height: 120, width: 120}}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2ocLo42tzqn80qMazJvgNY2c_UE6Rgirdhmy-HH4Hm2WE4_F6w'}}/>
            <Badge value={'20% off'} color={Color.primary} style={style.badge}/>
            <Text>
                <Text note style={style.currency}>KSH.</Text>
                <Text style={style.amount}>1,000</Text>
                <Text note style={style.currency}>.00</Text>
            </Text>
        </View>
    );
};
export const colorsFromUrl = (url) => {
    //this is a promise
    return DominantColor.colorsFromUrl(url);
};

//name and image
export class ProductCategory extends React.Component {
    state = {
        dominantColor:Color.primary,
    };

    componentDidMount(): void {
        colorsFromUrl(this.props.image)
            .then(colors => {
                this.setState({dominantColor:colors.dominantColor})
            }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <View style={{
                alignItems: "center",
                backgroundColor:"#fff",
                marginBottom:heightPercentageToDP("2")
            }}>
                <Image
                    resizeMode={"center"}
                    style={{height: heightPercentageToDP("12"), width:widthPercentageToDP("30"),
                        }}
                    source={{uri: this.props.image}}/>
                    <View style={{
                        borderBottomRightRadius:5,
                        borderBottomLeftRadius:5,
                        alignSelf:"stretch",
                        alignItems:"center",
                        padding:5,
                        backgroundColor:this.state.dominantColor,
                    }}>
                        <Text
                            style={{color:"white",fontSize:12,fontFamily:"Roboto-Light"}}>
                            {this.props.name}
                        </Text>
                    </View>

            </View>
        );
    }
}
