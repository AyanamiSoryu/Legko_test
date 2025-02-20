import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 24,
    backgroundColor: '#f4f4f4'
  },

  scroll: {
    width: '100%',
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column'
    // alignItems: 'center'
  },

  searchBlock: {
    width: width > 600 ? '60%' : '100%',
    // marginBottom: 12,
    padding: 16,
    backgroundColor: '#f4f4f4'
  },

  flatList: {
    width: '100%',
    overflow: 'hidden'
    // flex: 1,
    // flexDirection: 'column'
    // paddingLeft: 12,
  },

  text: {
    fontFamily: 'Inter',
    fontSize: 20,
    lineHeight: 28,
    textAlign: 'left',
    fontWeight: '600',
    color: '#000000CC',
    marginTop: 24,
    marginBottom: 24,
    marginLeft: 12,
    backgroundColor: '#F4F4F4'
  },

  textArea: {
    backgroundColor: '#F4F4F4'
  },

  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 12,
    gap: 12,
    backgroundColor: '#f4f4f4'
  },

  sortByDateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4'
  }
});

export default styles;
