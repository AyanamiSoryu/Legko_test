import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import enMockData from '../../../assets/mockData/eventsEng.json';
import ruMockData from '../../../assets/mockData/eventsRu.json';
import EventCard from '../../components/Event/EventCard';
import EventBlock from '../../components/EventBlock/EventBlock';
import Header from '../../components/Header/Header';
import SortByDate from '../../components/SortByDate/SortByDate';
import Search from '../../smartComponents/Search/Search';
import chunkArray from '../../utils/chunkArray';
import useAppNavigation from '../../utils/hooks/useAppNavigation';
import imageRandomizer from '../../utils/imageRandomizer';
import styles from './EventListStyles';

const EventList = () => {
  const { i18n } = useTranslation();
  const navigation = useAppNavigation();
  const [inputValue, setInputValue] = useState<string>('');
  const [currentSortByDateValue, setSortByDate] = useState<'oldest' | 'latest' | 'default'>('default');

  const ruMockDataWithImage = useMemo(() => {
    return ruMockData.map((event) => {
      const img = imageRandomizer();
      return {
        id: event.id,
        date: event.date,
        title: event.title,
        description: event.description,
        img
      };
    });
  }, []);

  const enMockDataWithImage = useMemo(() => {
    return enMockData.map((event) => {
      const img = imageRandomizer();
      return {
        id: event.id,
        date: event.date,
        title: event.title,
        description: event.description,
        img
      };
    });
  }, []);

  const currentLanguage = i18n.language === 'ru' ? ruMockDataWithImage : enMockDataWithImage;

  const switchDateOrder = () => {
    if (currentSortByDateValue === 'default') return currentLanguage;

    const sortOrder = currentSortByDateValue === 'latest' ? 1 : -1;
    return [...currentLanguage].sort((a, b) => sortOrder * (+new Date(b.date) - +new Date(a.date)));
  };

  const searchFilter = switchDateOrder().filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()));

  const searchResult = searchFilter.map((event) => {
    return {
      id: event.id,
      title: event.title,
      description: event.description,
      date: event.date,
      image: event.img,
      size: 5,
      onSelect: () =>
        navigation.navigate('EventDetails', {
          id: event.id,
          date: event.date,
          title: event.title,
          description: event.description,
          image: event.img
        })
    };
  });

  const eventData = useMemo(() => {
    return chunkArray(switchDateOrder(), 10).map((events) => {
      const randomSize = Math.floor(Math.random() * 7);
      return {
        key: events[0].id.toString(),
        title: events[0].title,
        events: events.map((event) => {
          return {
            id: event.id,
            title: event.title,
            description: event.description,
            date: event.date,
            img: event.img,
            size: randomSize,
            onSelect: () =>
              navigation.navigate('EventDetails', {
                id: event.id,
                date: event.date,
                title: event.title,
                description: event.description,
                image: event.img
              })
          };
        })
      };
    });
  }, [i18n.language, currentSortByDateValue]);

  return (
    <ScrollView style={styles.scroll}>
      <SafeAreaView style={styles.root}>
        <Header />
        <View style={styles.searchBlock}>
          <Search inputValue={inputValue} setInputValue={setInputValue} />
        </View>
        <View style={styles.sortByDateContainer}>
          <SortByDate setInputValue={setSortByDate} currentValue={currentSortByDateValue} />
        </View>
        {inputValue ? (
          <View style={styles.searchContainer}>
            {searchResult.map((event) => {
              return (
                <EventCard
                  id={event.id}
                  date={event.date}
                  title={event.title}
                  description={event.description}
                  size={event.size}
                  img={event.image}
                  onSelect={event.onSelect}
                />
              );
            })}
          </View>
        ) : (
          eventData.map(({ key, title, events }) => (
            <View style={styles.flatList} key={key}>
              <View style={styles.textArea}>
                <Text style={styles.text}>{title}</Text>
              </View>
              <EventBlock events={events} />
            </View>
          ))
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default EventList;
