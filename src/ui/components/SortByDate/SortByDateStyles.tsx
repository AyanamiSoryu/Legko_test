import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    gap: 0,
    backgroundColor: '#dcdcdc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    width: 250,
    borderRadius: 24
  },

  svg: {
    height: 20,
    width: 20
  },

  text: {
    fontSize: 16,
    lineHeight: 16
  }
});

export default styles;
