import imageRandomizer from './imageRandomizer';

type MockEvent = {
  id: number;
  date: string;
  title: string;
  description: string;
};

const mockDataConverter = (events: Array<MockEvent>, size: number, onSelect: () => void) => {
  const randomSize = Math.floor(Math.random() * 7);
  const newEvents = events.map((item) => {
    return {
      id: item.id,
      date: item.date,
      title: item.title,
      description: item.description,
      img: imageRandomizer(),
      size: randomSize,
      onSelect: () => onSelect
    };
  });
  const result = [];
  for (let i = 0; i < newEvents.length; i += size) {
    result.push(newEvents.slice(i, i + size));
  }
  return result;
};

export default mockDataConverter;
