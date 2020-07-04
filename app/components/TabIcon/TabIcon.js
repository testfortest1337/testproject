import React, {memo} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

export default memo(({source, isActive}) => (
  <View style={styles.iconWrapper}>
    <Image source={source} style={[styles.icon, isActive && styles.acitve]} />
  </View>
));
