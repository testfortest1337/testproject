import React, {PureComponent} from 'react';
import {FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import PersonItem from '../../components/PersonItem/PersonItem';
import {getList} from '../../utils/parser';

class AllPeople extends PureComponent {
  state = {
    list: [],
  };

  componentDidMount() {
    this.updateList();
  }

  updateList() {
    const newList = getList(false);
    this.setState({list: newList});
  }

  keyExtractor = (item) => item.id.toString();

  renderItem = ({item}) => (
    <PersonItem
      key={`${item.id}`}
      firstName={item.first_name}
      lastName={item.last_name}
      avatarSource={item.avatar}
      email={item.email}
    />
  );

  render() {
    const {list} = this.state;

    return (
      <LinearGradient style={styles.container} colors={['#FF9671', '#FFC75F']}>
        <FlatList
          data={list}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </LinearGradient>
    );
  }
}

export default AllPeople;
