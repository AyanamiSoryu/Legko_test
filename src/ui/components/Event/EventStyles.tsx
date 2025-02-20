import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flex: 1
  },

  placeSize1: {
    display: 'flex',
    // height: 240,
    // width: 369,
    height: height / 2,
    width: width - 48,
    borderRadius: 16,
    overflow: 'hidden',
    flexDirection: 'column',
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#E4E4E4'
  },

  placeSize2: {
    display: 'flex',
    height: 240,
    width: 320,
    borderRadius: 16,
    // marginRight: 16,
    overflow: 'hidden',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#E4E4E4'
  },

  placeSize3: {
    display: 'flex',
    height: 260,
    width: 200,
    borderRadius: 16,
    // marginRight: 16,
    overflow: 'hidden',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#E4E4E4'
  },

  placeSize4: {
    display: 'flex',
    height: 236,
    width: 200,
    borderRadius: 16,
    // marginRight: 16,
    overflow: 'hidden',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#E4E4E4'
  },

  placeSize5: {
    display: 'flex',
    height: 216,
    width: 160,
    borderRadius: 16,
    // marginRight: 16,
    overflow: 'hidden',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#E4E4E4'
  },

  placeSize6: {
    display: 'flex',
    height: 236,
    width: 176.5,
    borderRadius: 16,
    // marginRight: 16,
    overflow: 'hidden',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#E4E4E4'
  },

  placeSize7: {
    display: 'flex',
    flexWrap: 'nowrap',
    height: 100,
    // width: '100%',
    // width: 176.5,
    borderRadius: 16,
    // marginLeft: 12,
    // marginRight: 16,
    overflow: 'hidden',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E4E4E4'
  },

  disclaimerText: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff'
  },

  disclaimerTextSize1: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0,
    // textAlign: 'left',
    color: '#ffffff'
  },

  disclaimerTextSize5: {
    position: 'absolute',
    width: 100,
    bottom: 16,
    left: 16,
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff'
  },

  textBlockWithOpacity: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    display: 'flex',
    // height: 80,
    width: '100%',
    backgroundColor: '#00000050',
    color: '#ffffff',
    // opacity: 0.5,
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    gap: 4
  },

  textBlock: {
    zIndex: 1,
    display: 'flex',
    // height: 80,
    width: '100%',
    backgroundColor: '#ffffff',
    color: '#000000CC',
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    gap: 4
  },

  textBlockHorizontal: {
    // zIndex: 1,
    // display: 'flex',
    // height: 80,
    width: '70%',
    backgroundColor: '#ffffff',
    color: '#000000CC',
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    gap: 4
  },

  textOfOtherInfoWithOpacity: {
    fontFamily: 'Inter',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff'
  },

  textOfOtherInfo: {
    fontFamily: 'Inter',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000CC'
  },

  image: {
    display: 'flex',
    flexShrink: 1,
    width: '100%',
    height: '100%'
  },

  disclaimerTextBlockWithOpacity: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#00000050',
    color: '#ffffff',
    // opacity: 0.5,
    paddingTop: 8,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    gap: 4
  },

  textOfNameOfPlaceWithOpacity: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ffffff'
  },

  textOfNameOfPlace: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000CC'
  },

  textAreaWithIcon: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4
  },

  heart: {
    zIndex: 1,
    top: 5,
    right: 5,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40
  }
});

export default styles;
