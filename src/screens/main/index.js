import React from 'react';
import {
    AccountBarItem,
    BottomBar,
    BottomBarItem,
    CartBarItem,
    FeedBarItem,
    HomeBarItem,
    MessageBarItem,
} from '../../components/BottomBar';
import {Button} from 'native-base';
import {SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
    createAppContainer,
} from 'react-navigation';
import HomeScreen from '../home/HomeScreen';
import FeedScreen from '../feeds/FeedScreen';
import MessageScreen from '../messages/MessageScreen';
import CartScreen from '../cart/CartScreen';
import ProfileScreen from '../ProfileScreen';
import {Account, Cart, Feed, Home, MessageBubble} from '../../Icons';
import {Color} from '../../theme';
import {fromLeft} from 'react-navigation-transitions';
import {createStackNavigator} from 'react-navigation-stack';
import EditProfileScreen from '../editprofile/EditProfileScreen';
import CreateAvatarStack from './CreateAvatarStack';
import {colors} from '../../config/Theme';
import ChannelList from '../messages/ChannelList';

const NavBar = (props) => {
    const index = props.navigation.state.index;
    return (
        <BottomBar>
            <Button transparent onPress={() => {
                props.navigation.navigate('Home');
            }}>
                <HomeBarItem active={index === 0} size={20}/>
            </Button>
            <Button transparent onPress={() => {
                props.navigation.navigate('Feed');
            }}>
                <FeedBarItem active={index === 1} size={20}/>
            </Button>
            <Button transparent onPress={() => {
                props.navigation.navigate('Message');
            }}>
                <MessageBarItem active={index === 2} size={20}/>
            </Button>
            <Button transparent onPress={() => {
                props.navigation.navigate('Cart');
            }}>
                <CartBarItem active={index === 3} size={20}/>
            </Button>
            <Button transparent onPress={() => {
                props.navigation.navigate('Account');
            }}>
                <AccountBarItem active={index === 4} size={20}/>
            </Button>
        </BottomBar>
    );
};

const navigationOptions = {
    headerStyle: {
        backgroundColor: colors.backgroundGrey,
    },
    headerTintColor: colors.tintColor,
}

const ProfileStack = createStackNavigator({
    ProfileScreen: {
        screen: ProfileScreen,
    },
    EditProfile: {
        screen: EditProfileScreen,
    },
    CreateAvatar: {
        screen: CreateAvatarStack,
        navigationOptions,
    },

}, {
    initialRouteName: 'ProfileScreen',
    headerMode: 'none',
    navigationOptions: ({navigation}) => ({
        tabBarVisible: navigation.state.index < 1,
    }),
});

const MessagesStack = createStackNavigator({
    Messages: {
        screen: ChannelList,
    },
    Chat: {
        screen: MessageScreen,
    },

}, {
    initialRouteName: 'Messages',
    headerMode: 'none',
    navigationOptions: ({navigation}) => ({
        tabBarVisible: navigation.state.index < 1,
    }),
});
const Navigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
    },
    Feed: {
        screen: FeedScreen,
    },
    Message: {
        screen: MessagesStack,
    },
    Cart: {
        screen: CartScreen,
    },
    Account: {
        screen: ProfileStack,
    },
}, {
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: Color.primary,
        labelStyle: {
            fontFamily: 'Roboto-Light',
            fontSize: 12,
        },
    },
    tabBarComponent: NavBar,

});
export default createAppContainer(Navigator);
