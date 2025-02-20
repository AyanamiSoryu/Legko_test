import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    width: '100%',
    height: 100,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: '#dcdcdc'
  },

  languageSelector: {
    position: 'absolute',
    top: 60,
    right: 10
  },

  text: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'left',
    color: '#000000CC'
  }
});

export default styles;
