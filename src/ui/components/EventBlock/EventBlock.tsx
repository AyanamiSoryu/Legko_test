import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import EventCard, { EventType } from '../Event/EventCard';
import styles from './EventBlockStyles';

export type EventListProps = {
  events: EventType[];
};

const EventBlock: React.FC<EventListProps> = (props) => {
  const { events } = props;

  return (
    <SafeAreaView style={styles.root}>
      {events.length > 1 ? (
        <FlatList
          contentContainerStyle={{ gap: 16, paddingLeft: 12, paddingRight: 12 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item: event }) => (
            <EventCard
              id={event.id}
              description={event.description}
              img={event.img}
              title={event.title}
              date={event.date}
              size={event.size || 2}
              onSelect={event.onSelect}
            />
          )}
          data={events}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <EventCard
          id={events[0].id}
          description={events[0].description}
          img={events[0].img}
          title={events[0].title}
          date={events[0].date}
          size={2}
          onSelect={() => events[0].onSelect}
        />
      )}
    </SafeAreaView>
  );
};

export default EventBlock;
