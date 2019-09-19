import React, {PureComponent} from 'react';
import {Body, Button, Container, Header, Icon, Left, Right, Text, Title,} from 'native-base';
import {Color} from '../../theme';
import {StatusBar, View,TouchableWithoutFeedback} from 'react-native';
import {Gravatar} from 'nachos-ui';
const conversations=[
    {
        message:"Hello world",
        time:"just now",
        user:"Joe gichuru"
    },
    {
        message:"😂😂😂😂😂",
        time:"Yesterday",
        user:"john doe"
    }
]
export default class ChannelList extends React.Component {
    //render a list of channels
    render() {
        return (
            <Container>
                <Header androidStatusBarColor={Color.primary}

                        style={{backgroundColor: Color.white}}>
                    <StatusBar barStyle="light-content"
                               backgroundColor={Color.primary}/>
                    <Left>
                        <Gravatar
                            md5='313cbdb52db5b6bb6b3f14bc4ddae461'
                            size={40}
                            circle
                        />
                    </Left>
                    <Body>
                        <Title style={{color: 'black'}}>Messages</Title>
                    </Body>
                </Header>

                <Conversation onPress={()=>{
                    this.props.navigation.navigate("Chat")
                }} conversation={conversations[0]}/>
                <Conversation onPress={()=>{
                    this.props.navigation.navigate("Chat")
                }} conversation={conversations[1]}/>
            </Container>
        );
    }
}

const style={
    conversationContainer:{
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:10,
        paddingRight:10,
    },
    lastMessageContainer:{

    },
    time:{
        position:"absolute",
        top:0,
        padding:8,
        justifyContent:"center",
        bottom:0,
        right:0,
    }
};
export const Conversation = (props) => {
    const {message,time,user}=props.conversation;
    return (
        <TouchableWithoutFeedback  onPress={()=>props.onPress()}>
            <View style={style.conversationContainer}>
                <Gravatar
                    md5='313cbdb52db5b6bb6b3f14bc4ddae461'
                    size={50}
                    style={{margin:10}}
                    circle
                />
                <View style={style.lastMessageContainer}>
                    <Text>{user}</Text>
                    <Text note style={{fontSize:12}}>{message}</Text>
                </View>
                <View style={style.time}>
                    <Text note >{time}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>

    );
};
