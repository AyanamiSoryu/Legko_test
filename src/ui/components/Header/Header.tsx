import { useTranslation } from 'react-i18next';
import { SafeAreaView, Text, View } from 'react-native';

import LanguageSelection from '../LanguageSelection/LanguageSelection';
import styles from './HeaderStyles';

const Header = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.root}>
      <View>
        <Text style={styles.text}>{t('Список событий')}</Text>
      </View>
      <View style={styles.languageSelector}>
        <LanguageSelection />
      </View>
    </SafeAreaView>
  );
};

export default Header;
