import React from 'react';
import {
    Image, SafeAreaView, StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Feed from '../../components/Home/Feed';
import Logo from '../../assets/images/logo.png';
import {Color} from '../../theme';
import {Body, Header, Icon, Right,Title} from 'native-base';
import {Indicator} from '../../components/BottomBar';

class FeedScreen extends React.Component {
    static navigationOptions = {
        headerTitleStyle: {
            flex: 1,
        },
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>

                <Header  androidStatusBarColor={Color.primary}
                         noShadow
                        style={{backgroundColor:Color.white}}  >
                    <StatusBar barStyle="light-content"
                               backgroundColor={Color.primary} />
                    <Body style={{flexGrow:10}}>
                        <Title style={{color:"black",marginLeft:5}}>Feeds</Title>
                    </Body>
                    <Right style={{margin:5}}>
                        <Icon name={"user-check"}
                              allowFontScaling={true}
                              type={"Feather"}
                              style={{color:"#444",fontSize:20}}/>
                    </Right>
                </Header>
                <Feed />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom:56
    },
    logo: {
        width: 85,
        height: 35,
        alignSelf: 'stretch',
    }
});

export default FeedScreen;
