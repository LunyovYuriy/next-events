import EventsList from '../../components/EventsList/EventsList';
import EventsSearch from './components/EventsSearch';
import { useRouter } from 'next/router';
import IEvents from './interfaces/IEvents';

function EventsView({allEvents}: IEvents) {
  const router = useRouter();

  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventsList list={allEvents} />
    </div>
  );
}

export default EventsView;
