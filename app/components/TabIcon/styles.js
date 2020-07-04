import {StyleSheet} from 'react-native';
import {INACTIVE_COLOR, ACTIVE_COLOR} from '../../config/main';

export default StyleSheet.create({
  iconWrapper: {
    marginTop: 4,
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: INACTIVE_COLOR,
  },
  acitve: {
    tintColor: ACTIVE_COLOR,
  },
});
