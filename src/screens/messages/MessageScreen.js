import React,{PureComponent} from 'react';

import {View,SafeAreaView} from 'react-native';
import {Text} from 'native-base';
import {GiftedChat} from 'react-native-gifted-chat/lib/GiftedChat';
import message from './messages';
import CustomActions from './ChatActions';

class MessageScreen extends PureComponent {
    state = {
        messages: message,
    };


    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
            <View style={{flex:1,marginBottom:56}}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    isAnimated

                    placeholder={"Type something joseph.."}
                    renderActions={()=><CustomActions/>}
                    showUserAvatar
                    videoProps={{
                        style:{
                        width:400
                        },
                        fullscreen:true,
                    }}
                    user={{
                        _id: 1,
                    }}
                />
            </View>
        )
    }
}

export default MessageScreen;
