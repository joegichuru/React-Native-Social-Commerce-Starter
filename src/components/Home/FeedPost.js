import React, {Component} from 'react';
import format from 'date-fns/format';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
import {colors} from '../../config/Theme';
import {Icon} from 'native-base';
import InstaFont from '../InstaFont';
import Comments from './Comments';
import ImageComponent from '../common/ImageComponent';
import {Color} from '../../theme';
import TimeAgo from 'react-native-timeago';

const win = Dimensions.get('window');

export default class FeedPost extends Component {
    render() {
        const {data} = this.props;
        const author = this.props.users.filter(user => user.id === data.authorId)[0] || {};

        const uri = data.uri;
        const uriAuthor = author.avatar;

        const isLocalFile = !!uri.startsWith('assets-library:');
        const isLocalAvatar = !!author.avatar.startsWith('assets-library:');

        //const createdDate = format(data.created, 'Dd MMMM');
        const createdDate = data.created;

        const isPostLiked = this.props.currentUser !== null
            ? data.likes.filter(userId => userId === this.props.currentUser.id)[0] >= 0
            : false;

        const avatar = this.props.currentUser !== null
            ? this.props.currentUser.avatar
            : null;

        return (
            <View style={styles.container}>

                <View style={styles.header}>

                    <ImageComponent
                        style={styles.avatar}
                        uri={uriAuthor}
                    />
                    <View>
                      <Text style={styles.headerAuthorName}>
                        {author.username}
                      </Text>
                        <TimeAgo time={createdDate} style={styles.timeStamp}/>
                    </View>

                    {/*follow visit view*/}
                    {
                        isPostLiked ? <View style={[styles.baseBtn, styles.followBtn]}>
                                <Text style={[styles.baseTxt, styles.followTxt]}>+ FOLLOW</Text>
                            </View> :
                            <View style={[styles.baseBtn, styles.visitStoreBtn]}>
                                <Text style={[styles.baseTxt, styles.visitStoreTxt]}>VISIT STORE</Text>
                            </View>
                    }
                </View>

                <ImageComponent
                    style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        width: win.width,
                        height: win.width,
                    }}
                    uri={uri}
                />

                <View style={styles.footer}>
                    <View style={styles.actions}>

                        <View
                            style={styles.likeBtn}
                        >
                            <Icon
                                name={isPostLiked ? 'ios-heart' : 'ios-heart-empty'}
                                type={'Ionicons'}
                                style={isPostLiked ? styles.liked : styles.notLiked}
                            />
                        </View>

                        <Icon
                            name="comment"
                            type={'EvilIcons'}
                            style={{
                                fontSize: 25,
                                margin: 4,
                                color: '#444',
                            }}
                        />
                        <Icon
                            name="share"
                            type={'Feather'}
                            style={{
                                fontSize: 20,
                                margin: 4,
                                color: '#444',
                            }}
                        />
                    </View>

                    <Text style={styles.likes}>{data.likes.length} likes</Text>

                    {avatar &&
                    <Comments
                        data={data.comments}
                        users={this.props.users}
                        userAvatar={avatar}
                    />
                    }

                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
    },
    header: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    avatar: {
        flex: 0,
        height: 40,
        width: 40,
        borderRadius: 20,
        alignSelf: 'stretch',
        marginRight: 10,
    },
    headerAuthorName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    menuToggler: {
        color: colors.actions,
        marginLeft: 'auto',
        fontSize: 25,
    },
    footer: {
        padding: 10,
    },
    captionView: {
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    captionText: {
        fontSize: 16,
    },
    likes: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeStamp: {
        color: colors.actions,
        fontSize: 14,
        fontFamily: "Roboto-Light"
    },
    likeBtn: {
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    liked: {
        color: colors.heart,
        fontSize: 22,
        margin: 4,
    },
    notLiked: {
        color: '#444',
        fontSize: 22,
        margin: 4,
    },
    baseBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        paddingLeft: 12,
        marginRight: 10,
        paddingRight: 12,
        paddingTop: 4,
        paddingBottom: 4,
        right: 0,
        borderRadius: 15,
    },
    visitStoreBtn: {
        borderColor: Color.primary,
        borderWidth: 1,
    },

    followBtn: {
        backgroundColor: Color.primary,
    },
    baseTxt: {
        fontSize: 12,
        fontFamily: 'Roboto-Regular',
    },
    followTxt: {
        color: 'white',
    },
    visitStoreTxt: {
        color: Color.primary,
    },

});
