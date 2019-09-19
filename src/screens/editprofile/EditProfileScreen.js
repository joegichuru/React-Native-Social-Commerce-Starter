import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Keyboard, StatusBar,
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../config/Theme';
import * as ProfileActions from '../../actions/Profile.actions';

import EditAvatar from '../../components/EditProfile/EditAvatar';
import EditProfileForm from '../../components/EditProfile/EditProfileForm';
import {Body, Button, Header, Icon, Left, Right,Title} from 'native-base';
import {Color} from '../../theme';
import {Gravatar} from 'nachos-ui';

const ScreenPointer = {};

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

class EditProfileScreen extends Component {


    componentDidMount() {
        // ScreenPointer.this = this;
    }

    updateUser = (userUpdates) => {
        // this.props.updateUserViaForm(userUpdates);

        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Profile'})],
        });
        this.props.navigation.dispatch(resetAction);

        this.props.navigation.navigate('Profile');
    };


    render() {
        return (
            <View style={styles.container}>
                <Header androidStatusBarColor={Color.primary}

                        style={{backgroundColor: Color.white}}>
                    <StatusBar barStyle="light-content"
                               backgroundColor={Color.primary}/>

                    <Left>
                        <View style={{flexDirection: 'row'}}>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon type={'AntDesign'} name={'arrowleft'} style={{color: 'black', fontSize: 16}}/>
                            </Button>
                        </View>
                    </Left>
                    <Body>
                        <Title style={{color: 'black'}}>Edit Profile</Title>
                    </Body>
                    <Right style={{margin: 5}}>
                        <Icon name={'user-check'}
                              allowFontScaling={true}
                              type={'Feather'}
                              style={{color: '#444', fontSize: 20}}/>
                    </Right>
                </Header>
                <EditAvatar
                    user={user}
                    navigation={this.props.navigation}
                    editProfileScreen={true}
                />

                <EditProfileForm user={user}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    checkIcon: {
        fontSize: 50,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: colors.anchor,
        marginBottom: 5,
    },
    backBtn: {
        color: colors.textColor,
        marginLeft: 10,
        fontSize: 45,
    },
});


// const mapStateToProps = (state) => ({
//   user: state.profile.currentUser,
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   updateUserViaForm: () => dispatch(ProfileActions.updateUserViaForm()),
// });

export default EditProfileScreen;
