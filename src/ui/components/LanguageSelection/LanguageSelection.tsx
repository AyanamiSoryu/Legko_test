import { useTranslation } from 'react-i18next';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import styles from './LanguageSelectionStyles';

const LanguageSelection = () => {
  const { i18n } = useTranslation();

  return (
    <SafeAreaView style={styles.root}>
      {i18n.language === 'en' ? (
        <TouchableOpacity
          onPress={() => {
            i18n.changeLanguage('ru');
          }}>
          <Text style={styles.text}>🇬🇧 English</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            i18n.changeLanguage('en');
          }}>
          <Text style={styles.text}>🇷🇺 Русский</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default LanguageSelection;
