import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

import Calendar from '../../../assets/icons/fluent_calendar-24-filled.svg';
import HeartIcon from '../../../assets/icons/heartInColor.svg';
import WhiteCalendar from '../../../assets/icons/whiteFluent_calendar-24-filled.svg';
import useFavorites from '../../../store/favoriteSlicer/favoriteHook';
// import { EventType } from '../EventBlock/EventBlock';
import styles from './EventStyles';

const placeStyles: Record<number, object> = {
  1: styles.placeSize1,
  2: styles.placeSize2,
  3: styles.placeSize3,
  4: styles.placeSize4,
  5: styles.placeSize5,
  6: styles.placeSize6,
  7: styles.placeSize7
};

const textBlockStyles: Record<number, object> = {
  1: styles.textBlockWithOpacity,
  7: styles.textBlockHorizontal
};

const otherInfoStyles: Record<number, object> = {
  1: styles.textOfOtherInfoWithOpacity
};

const nameOfPlaceStyles: Record<number, object> = {
  1: styles.textOfNameOfPlaceWithOpacity
};

const getStyle = (stylesMap: Record<number, object>, key: number, defaultStyle: object) => {
  return stylesMap[key] || defaultStyle;
};

export type EventType = {
  id: number;
  date: string;
  title: string;
  description: string;
  size: number;
  img: ImageSourcePropType;
  onSelect: () => void;
};

const EventCard: React.FC<EventType> = (props) => {
  const { id, date, title, size, onSelect, img } = props;
  const { favorites } = useFavorites();
  const isFavorite = favorites.includes(`${id}`);

  return (
    <TouchableOpacity style={getStyle(placeStyles, size, styles.placeSize3)} onPress={() => onSelect()}>
      <View style={styles.heart}>{isFavorite && <HeartIcon />}</View>
      <Image source={img} style={styles.image} />
      {title && (
        <View style={getStyle(textBlockStyles, size, styles.textBlock)}>
          <Text style={getStyle(nameOfPlaceStyles, size, styles.textOfNameOfPlace)}>{title}</Text>
          {date && (
            <View style={styles.textAreaWithIcon}>
              {size !== 1 ? <Calendar /> : <WhiteCalendar />}
              <Text style={getStyle(otherInfoStyles, size, styles.textOfOtherInfo)}>{date}</Text>
            </View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default EventCard;
