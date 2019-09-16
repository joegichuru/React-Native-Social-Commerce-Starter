import React from 'react';
import uuidv4 from 'uuid/v4';
import {connect} from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import * as HomeActions from '../../actions/Home.actions';

import data from '../../config/data.json';

import FeedPost from './FeedPost';
import {colors} from '../../config/Theme';

class Feed extends React.Component {

  constructor(props) {
    super(props);
  }

  renderItem = (item) => {
    return (
      <FeedPost
        data={item}
        users={data.users}
        currentUser={data.users[0]}
      />
    )
  }

  _keyExtractor = (item, index) => "#"+index;

  render() {
    const { loading } = this.props;

    if (loading) return (
      <View style={styles.containerFull}>
        <ActivityIndicator
          size="large"
          color={colors.tintColor}
        />
      </View>
    )

    if (data.feed === null ||data.feed==undefined|| data.feed.length === 0) return (
      <View style={styles.containerFull}>
        <Text>No posts yet</Text>
      </View>
    )

    return (
      <FlatList
        style={styles.container}
        data={data.feed}
        renderItem={({item}) => this.renderItem(item)}
        keyExtractor={this._keyExtractor}
        users={data.users}
      >
      </FlatList>
    );
  }

}

const styles = StyleSheet.create({
  containerFull: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
});

export default Feed;
