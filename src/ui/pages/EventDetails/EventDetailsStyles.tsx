import { Platform, StatusBar, StyleSheet } from 'react-native';

const buttonsTopPadding = Platform.OS === 'android' && StatusBar.currentHeight ? StatusBar.currentHeight + 8 : 62;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingBottom: 24
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
    // paddingHorizontal: 16,
    paddingTop: 16,
    justifyContent: 'center',
    marginTop: 380
    // alignItems: 'center'
  },

  cardInfoTextContainer: {
    display: 'flex',
    paddingHorizontal: 16
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
    gap: 16
    // height: 1000
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
