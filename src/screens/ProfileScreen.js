import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, StatusBar,
} from 'react-native';
import UserProfile from '../components/Profile/UserProfile';
import UserPostList from '../components/Profile/UserPostList';
import {Color} from '../theme';
import {Body, Header, Icon, Right, Title} from 'native-base';

const posts = [{
    'id': 0,
    'authorId': 0,
    'uri': 'https://s3.amazonaws.com/instabyte/posts/01.jpg',
    'likes': [0, 1, 2],
    'created': 'Mon Apr 30 2018 14:27:05 GMT+0300 (EEST)',
    'comments': [{
        'authorId': 2,
        'text': 'nice nice nice.. 😊🚣🏽',
        'date': 'Mon Apr 30 2018 16:27:05 GMT+0300 (EEST)',
    }],
}, {
    'id': 1,
    'authorId': 2,
    'uri': 'https://s3.amazonaws.com/instabyte/posts/02.jpg',
    'likes': [],
    'created': 'Mon Apr 28 2018 10:27:05 GMT+0300 (EEST)',
    'comments': [{
        'authorId': 0,
        'text': 'Mez who den loollll﻿',
        'date': 'Mon Apr 28 2018 15:47:00 GMT+0300 (EEST)',
    },
        {
            'authorId': 2,
            'text': 'Bare re uploads lately.. you man just take your time man stop rushing lol﻿',
            'date': 'Mon Apr 29 2018 05:24:05 GMT+0300 (EEST)',
        },
    ],
}, {
    'id': 3,
    'authorId': 0,
    'uri': 'https://s3.amazonaws.com/instabyte/posts/03.jpg',
    'likes': [3],
    'created': 'Mon Apr 30 2018 14:27:05 GMT+0300 (EEST)',
    'comments': [],
}, {
    'id': 4,
    'authorId': 0,
    'uri': 'https://s3.amazonaws.com/instabyte/posts/04.jpg',
    'likes': [0, 1, 2],
    'created': 'Mon Apr 30 2018 14:27:05 GMT+0300 (EEST)',
    'comments': [],
}, {
    'id': 5,
    'authorId': 0,
    'uri': 'https://s3.amazonaws.com/instabyte/posts/05.jpg',
    'likes': [],
    'created': 'Sun Sept 14 2019 16:27:05 GMT+0300 (EEST)',
    'comments': [],
}];
const user = {
    'id': 0,
    'username': 'ket',
    'name': 'Katty',
    'avatar': 'https://s3.amazonaws.com/instabyte/users/01.jpg',
    'details': 'Know what? According to researchers, it takes less than two-tenths of a second for an online visitor to form an impression of your account.',
    'statistics': {
        'posts': 67,
        'followers': 638,
        'following': 505,
    },
};

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const userPosts = posts;

        return (
            <View style={styles.container}>
                <Header androidStatusBarColor={Color.primary}
                        noShadow
                        style={{backgroundColor: Color.white}}>
                    <StatusBar barStyle="light-content"
                               backgroundColor={Color.primary}/>
                    <Body style={{flexGrow: 10}}>
                        <Title style={{color: 'black', marginLeft: 5}}>Profile</Title>
                    </Body>
                    <Right style={{margin: 5}}>
                        <Icon name={'setting'}
                              allowFontScaling={true}
                              type={'AntDesign'}
                              style={{color: '#444', fontSize: 20}}/>
                    </Right>
                </Header>
                <UserProfile
                    user={user}
                    navigation={this.props.navigation}
                    {...this.props}
                />

                <UserPostList
                    userPosts={userPosts}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});


export default ProfileScreen
