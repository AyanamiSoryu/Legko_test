import React, { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';

import SortIcon from '../../../assets/icons/sort-vertical-svgrepo-com.svg';
import styles from './SortByDateStyles';

type SortByDateProps = {
  currentValue: 'oldest' | 'latest' | 'default';
  setInputValue: Dispatch<SetStateAction<'oldest' | 'latest' | 'default'>>;
};

const SortByDate: React.FC<SortByDateProps> = (props) => {
  const { setInputValue, currentValue } = props;
  const { t } = useTranslation();

  const switchText = (text: 'oldest' | 'latest' | 'default') => {
    switch (text) {
      case 'oldest':
        return t('старое');
      case 'latest':
        return t('последнее');
      default:
        return t('отсортировать по дате');
    }
  };

  const switchMode = (text: 'oldest' | 'latest' | 'default') => {
    switch (text) {
      case 'oldest':
        return setInputValue('default');
      case 'latest':
        return setInputValue('oldest');
      default:
        return setInputValue('latest');
    }
  };

  return (
    <TouchableOpacity style={styles.root} onPress={() => switchMode(currentValue)}>
      <View style={styles.svg}>
        <SortIcon />
      </View>
      <Text style={styles.text}>{switchText(currentValue)}</Text>
    </TouchableOpacity>
  );
};

export default SortByDate;
