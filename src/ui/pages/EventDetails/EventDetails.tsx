import React, { useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View
} from 'react-native';

import Calendar from '../../../assets/icons/fluent_calendar-24-filled.svg';
import EmptyHeartIcon from '../../../assets/icons/heart.svg';
import HeartIcon from '../../../assets/icons/heartInColor.svg';
import ArrowIcon from '../../../assets/icons/whiteLeftArrow.svg';
import enMockData from '../../../assets/mockData/eventsEng.json';
import ruMockData from '../../../assets/mockData/eventsRu.json';
import useFavorites from '../../../store/favoriteSlicer/favoriteHook';
import EventBlock from '../../components/EventBlock/EventBlock';
import chunkArray from '../../utils/chunkArray';
import useAppNavigation from '../../utils/hooks/useAppNavigation';
import useEventDetailsRoute from '../../utils/hooks/useEventDetailsRoute';
import imageRandomizer from '../../utils/imageRandomizer';
import eventListStyles from '../EventList/EventListStyles';
import styles from './EventDetailsStyles';

const EventDetails = () => {
  const { t, i18n } = useTranslation();
  const { params } = useEventDetailsRoute();
  const { id, date, title, description, image } = params;
  const navigation = useAppNavigation();
  const { favorites, toggle } = useFavorites();
  const isFavorite = favorites.includes(`${id}`);
  const scrollRef = useRef<ScrollView | null>(null);
  const { width } = useWindowDimensions();

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ animated: true, y: 0 });
  };

  const eventsData = useMemo(() => {
    return chunkArray(i18n.language === 'ru' ? ruMockData : enMockData, 10).map((events) => {
      const randomSize = Math.floor(Math.random() * 7);
      return {
        key: events[0].id.toString(),
        title: events[0].title,
        events: events.map((event) => {
          const img = imageRandomizer();
          return {
            id: event.id,
            title: event.title,
            description: event.description,
            date: event.date,
            img,
            size: randomSize,
            onSelect: () => {
              scrollToTop();
              navigation.navigate('EventDetails', {
                id: event.id,
                date: event.date,
                title: event.title,
                description: event.description,
                image: img
              });
            }
          };
        })
      };
    });
  }, [i18n.language, ruMockData, enMockData, navigation]);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.scroll} ref={scrollRef}>
        <View style={styles.imageAndButtonsContainer}>
          <View style={styles.buttonsArea}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
              <ArrowIcon />
            </TouchableOpacity>
            <View style={styles.heartAndShareButtonsGroup}>
              <TouchableOpacity style={styles.button} onPress={() => toggle(`${id}`)}>
                {isFavorite ? <HeartIcon /> : <EmptyHeartIcon />}
              </TouchableOpacity>
            </View>
          </View>
          <Image source={image} style={{ width, flex: 1, resizeMode: 'cover', alignSelf: 'center' }} />
        </View>
        <View style={styles.cardInfoContainer}>
          <View style={styles.cardInfoTextContainer}>
            <View style={styles.nameDateTagsArea}>
              <Text style={styles.nameOfCard}>{title}</Text>
              <View style={styles.dateArea}>
                <Calendar />
                <Text style={styles.date}>{date}</Text>
              </View>
            </View>
            {description && (
              <View style={styles.descriptionArea}>
                <Text style={styles.description}>{t('Описание')}</Text>
                <Text style={styles.descriptionText}>{description}</Text>
              </View>
            )}
            <Text style={styles.placeOfEventText}>{t('Рекомендации')}</Text>
          </View>
          {eventsData.map(({ key, events }) => (
            <View style={eventListStyles.flatList} key={key}>
              <View style={eventListStyles.textArea}>
                <Text style={eventListStyles.text}>{title}</Text>
              </View>
              <EventBlock events={events} />
            </View>
          ))}
          <SafeAreaView style={styles.cardInfoTextContainer} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetails;
