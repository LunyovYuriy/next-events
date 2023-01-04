import { getAllEvents } from '../../src/helpers/eventsApi';
import EventsView from '../../src/pages/Events/EventsView';
import IEvents from '../../src/pages/Events/interfaces/IEvents';

function Events({allEvents}: IEvents) {
  return <EventsView allEvents={allEvents} />;
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      allEvents,
    }
  }
}

export default Events;
