import React, {PureComponent} from 'react';

import {View, SafeAreaView, StatusBar} from 'react-native';
import {Body, Header, Icon, Right, Text, Button, Left} from 'native-base';
import {GiftedChat} from 'react-native-gifted-chat/lib/GiftedChat';
import message from './messages';
import CustomActions from './ChatActions';
import {Color} from '../../theme';
import Spinner from 'react-native-spinkit';
import {Gravatar} from 'nachos-ui';

class MessageScreen extends PureComponent {
    state = {
        messages: message,
    };


    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));
    }

    render() {
        return (
            <View style={{flex: 1,}}>
                <Header androidStatusBarColor={Color.primary}
                        noShadow
                        style={{backgroundColor: Color.white}}>
                    <StatusBar barStyle="light-content"
                               backgroundColor={Color.primary}/>

                    <Left>
                        <View style={{flexDirection: 'row'}}>
                            <Button transparent onPress={()=>this.props.navigation.goBack()}>
                                <Icon type={'AntDesign'} name={'arrowleft'} style={{color: 'black', fontSize: 16}}/>
                            </Button>
                            <Gravatar
                                md5='313cbdb52db5b6bb6b3f14bc4ddae461'
                                size={40}
                                circle
                            />
                        </View>
                    </Left>
                    <Body style={{paddingLeft:30}} >
                        <Text style={{color: 'black'}}>Joe Gichuru</Text>
                        <Text note style={{fontSize: 12}}>online</Text>
                    </Body>
                    <Right style={{margin: 5}}>
                        <Icon name={'user-check'}
                              allowFontScaling={true}
                              type={'Feather'}
                              style={{color: '#444', fontSize: 20}}/>
                    </Right>
                </Header>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    isAnimated
                    renderLoading={() =>
                        <Spinner isVisible
                                 style={{alignSelf: 'center', marginTop: 10}}
                                 size={30} type={'ThreeBounce'} color={'#2F8CFF'}/>
                    }
                    placeholder={'Type something joseph..'}
                    renderActions={() => <CustomActions/>}
                    showUserAvatar
                    videoProps={videoProps}
                    user={{
                        _id: 1,
                    }}
                />
            </View>
        );
    }
}

const videoProps = {
    paused: true,
    poster: 'https://baconmockup.com/300/200/',
    controls: true,
    resizeMode: 'cover',
};

export default MessageScreen;
