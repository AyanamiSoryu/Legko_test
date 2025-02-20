import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // height: 40,
    // padding: 12,
    borderWidth: 1,
    borderRadius: 31,
    // borderColor: '#00000033',
    backgroundColor: '#F0F0F0',
    width: '100%',
    overflow: 'hidden'
  },

  textInput: {
    width: '100%',
    display: 'flex',
    color: '#00000099',
    height: 20,
    // backgroundColor: '#F0F0F0',
    backgroundColor: 'transparent',
    // fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 16,
    // marginLeft: 10
    padding: 24,
    paddingRight: 30,
    textAlignVertical: 'center'
  },

  searchButton: {
    position: 'absolute',
    right: 5
  }
});

export default styles;
