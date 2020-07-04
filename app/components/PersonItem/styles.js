import {StyleSheet} from 'react-native';
import {FONT_COLOR, BORDER_COLOR} from '../../config/main';

export default StyleSheet.create({
  container: {
    height: 160,
    margin: 10,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: BORDER_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrapper: {
    width: 100,
    height: 100,
    borderColor: BORDER_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 15,
    color: FONT_COLOR,
    fontWeight: '800',
    alignContent: 'center',
  },
  email: {
    fontWeight: '500',
  },
  border: {
    borderRadius: 50,
    borderWidth: 4,
  },
});
