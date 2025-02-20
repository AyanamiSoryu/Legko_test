import { Platform, StatusBar, StyleSheet } from 'react-native';

const buttonsTopPadding = Platform.OS === 'android' && StatusBar.currentHeight ? StatusBar.currentHeight + 8 : 62;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingBottom: 12
  },

  imageAndButtonsContainer: {
    display: 'flex',
    // flex: 1,
    height: 400,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },

  image: {
    flex: 1,
    // height: windowHeight * 0.4,
    // height: 20,
    // width: windowWidth,
    resizeMode: 'cover',
    alignSelf: 'center'
  },

  cardInfoContainer: {
    flex: 1,
    // marginTop: windowHeight * 0.4,
    backgroundColor: '#f4f4f4',
    zIndex: 10,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 16,
    justifyContent: 'center',
    marginTop: 380
    // alignItems: 'center'
  },

  cardInfoTextContainer: {
    display: 'flex'
  },

  scroll: {
    flex: 1
  },

  nameDateTagsArea: {
    flexDirection: 'column',
    paddingTop: 16
  },

  nameOfCard: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    textAlign: 'left',
    color: '#000000'
  },

  dateArea: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },

  date: {
    paddingTop: 4,
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    color: '#00000099'
  },

  descriptionArea: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 24,
    gap: 16,
    height: 1000
  },

  description: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    color: '#000000CC'
  },

  descriptionText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
    color: '#000000'
  },

  placeOfEventText: {
    paddingTop: 24,
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    color: '#000000'
  },

  buttonsArea: {
    position: 'absolute',
    top: buttonsTopPadding,
    left: 12,
    right: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 3
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#00000099'
  },

  heartAndShareButtonsGroup: {
    flexDirection: 'row',
    gap: 12
  }
});

export default styles;

// import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
//
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// const buttonsTopPadding = Platform.OS === 'android' && StatusBar.currentHeight ? StatusBar.currentHeight + 8 : 62;
//
// const styles = StyleSheet.create({
//   root: {
//     flex: 1
//   },
//
//   image: {
//     flex: 1,
//     // height: 363,
//     height: windowHeight / 100,
//     width: windowWidth,
//     // height: "100%",
//     overflow: 'hidden'
//   },
//
//   cardInfoContainer: {
//     // paddingLeft: 12,
//     // paddingRight: 12,
//     flex: 1,
//     marginTop: 335,
//     backgroundColor: '#FFFFFF',
//     zIndex: 10,
//     borderTopLeftRadius: 24,
//     borderTopRightRadius: 24
//   },
//
//   cardInfoTextContainer: {
//     paddingLeft: 12,
//     paddingRight: 12,
//     flex: 1
//   },
//
//   scroll: {
//     flex: 1
//   },
//
//   nameDateTagsArea: {
//     display: 'flex',
//     flexDirection: 'column',
//     paddingTop: 16
//     // paddingLeft: 12,
//     // paddingRight: 12,
//   },
//
//   nameOfCard: {
//     fontFamily: 'Inter',
//     fontWeight: '600',
//     fontSize: 20,
//     lineHeight: 28,
//     letterSpacing: 0,
//     textAlign: 'left',
//     color: '#000000'
//   },
//
//   dateArea: {
//     flex: 1,
//     flexDirection: 'row',
//     gap: 8,
//     alignItems: 'center'
//   },
//
//   date: {
//     paddingTop: 4,
//     fontFamily: 'Inter',
//     fontWeight: '600',
//     fontSize: 16,
//     lineHeight: 20,
//     letterSpacing: 0,
//     textAlign: 'left',
//     color: '#00000099'
//   },
//
//   descriptionArea: {
//     display: 'flex',
//     flexDirection: 'column',
//     // paddingRight: 12,
//     // paddingLeft: 12,
//     paddingTop: 24,
//     gap: 16
//   },
//
//   description: {
//     fontFamily: 'Inter',
//     fontWeight: '600',
//     fontSize: 16,
//     lineHeight: 20,
//     textAlign: 'left',
//     color: '#000000CC'
//   },
//
//   descriptionText: {
//     fontFamily: 'Inter',
//     fontWeight: '400',
//     fontSize: 14,
//     lineHeight: 20,
//     textAlign: 'left',
//     color: '#000000'
//   },
//
//   placeOfEventText: {
//     paddingTop: 24,
//     // paddingRight: 12,
//     // paddingLeft: 12,
//     fontFamily: 'Inter',
//     fontWeight: '600',
//     fontSize: 16,
//     lineHeight: 20,
//     textAlign: 'left',
//     color: '#000000'
//   },
//
//   buttonsArea: {
//     flex: 1,
//     justifyContent: 'space-between',
//     width: '100%',
//     flexDirection: 'row',
//     position: 'absolute',
//     top: buttonsTopPadding,
//     zIndex: 3,
//     paddingLeft: 12,
//     paddingRight: 12
//   },
//   //
//   button: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#00000099'
//   },
//   //
//   heartAndShareButtonsGroup: {
//     display: 'flex',
//     flexDirection: 'row',
//     gap: 12
//   }
// });
//
// export default styles;
