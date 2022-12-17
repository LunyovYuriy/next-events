import EventItem from '../EventItem/EventItem';
import IEventsList from './interfaces/IEventsList';

function EventsList({ list }: IEventsList) {
  return (
    <ul>
      {list.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventsList;
