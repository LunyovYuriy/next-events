import EventsList from '../../components/EventsList/EventsList';
import EventsSearch from './components/EventsSearch';
import { getAllEvents } from '../../mocks/mock-data';
import { useRouter } from 'next/router';

function EventsView() {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventsList list={events} />
    </div>
  );
}

export default EventsView;
