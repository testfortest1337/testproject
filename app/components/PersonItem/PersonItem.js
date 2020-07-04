import React, {memo} from 'react';
import {View, Image, Text, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default memo(({avatarSource, firstName, lastName, email}) => (
  <View style={styles.container}>
    <LinearGradient
      colors={['#845EC2', '#D65DB1', '#FF6F91']}
      style={[styles.avatarWrapper, styles.border]}>
      {avatarSource ? (
        <Image
          source={{uri: `${avatarSource}.png`}}
          style={[styles.avatar, Platform.OS === 'android' && styles.border]}
        />
      ) : (
        <Text style={styles.text}>NO AVATAR</Text>
      )}
    </LinearGradient>
    <Text style={styles.text}>
      {firstName} {lastName}
    </Text>
    <Text style={[styles.text, styles.email]}>{email}</Text>
  </View>
));
