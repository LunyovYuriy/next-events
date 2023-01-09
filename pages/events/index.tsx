import Head from 'next/head';
import { getAllEvents } from '../../src/helpers/eventsApi';
import EventsView from '../../src/pages/Events/EventsView';
import IEvents from '../../src/pages/Events/interfaces/IEvents';

function Events({ allEvents }: IEvents) {
  return (
    <>
      <Head>
        <title>All events</title>
      </Head>
      <EventsView allEvents={allEvents} />;
    </>
  );
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      allEvents,
    },
    revalidate: 60,
  };
}

export default Events;
