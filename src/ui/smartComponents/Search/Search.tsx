import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

import SearchIcon from '../../../assets/icons/fluent_search-24-filled.svg';
import styles from './SearchStyles';

type SearchProps = {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
};

const Search: React.FC<SearchProps> = (props) => {
  const { t } = useTranslation();
  const { inputValue, setInputValue } = props;

  return (
    <SafeAreaView style={styles.root}>
      <TextInput
        placeholder={t('Поиск')}
        style={styles.textInput}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <TouchableOpacity style={styles.searchButton}>
        <SearchIcon />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Search;
