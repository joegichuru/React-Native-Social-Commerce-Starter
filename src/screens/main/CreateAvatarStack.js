import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createTabNavigator,createBottomTabNavigator} from "react-navigation-tabs"
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import { colors } from '../../config/Theme';

import PickImageScreen from '../pickimage/PickImageScreen';
import CaptureImageScreen from '../CaptureImageScreen';

import TabBarPhoto from './TabBarPhoto';

const navigationOptions = {
  headerStyle: {
    backgroundColor: colors.backgroundGrey,
  },
  headerTintColor: colors.tintColor,
}

const CreateAvatarTabs = createTabNavigator(
  {
    AvatarFromGallery: {
      screen: PickImageScreen,
      navigationOptions,
    },

    AvatarFromCamera: {
      screen: CaptureImageScreen,
      navigationOptions: {
        ...navigationOptions,
        headerRight: null,
      },
    },

  },
  {
    // initialRouteName: 'Photo',
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarPhoto,
    animationEnabled: true,
    swipeEnabled: true,
    headerMode: 'none',
    navigationOptions: ({navigation}) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons
            name="ios-close"
            size={50}
            color={colors.textColor}
            style={{marginLeft: 20,}}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile', {
            imageForAvatar: true,
          })}
        >
          <Text style={styles.nextBtn}>Next</Text>
        </TouchableOpacity>
      ),
    }),
  }
);

const CreateAvatarStack = createStackNavigator(
  {
    CreateAvatarStack: {
      screen: CreateAvatarTabs,
      navigationOptions,
    },
    // PostImage: {
    //   screen: PostImageScreen,
    //   navigationOptions,
    // },
  },
  {
    // initialRouteName: 'PostImage',
    headerMode: 'none',
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);


const styles = StyleSheet.create({
  nextBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: colors.anchor,
  },
});


export default CreateAvatarStack;
