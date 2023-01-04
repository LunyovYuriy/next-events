import { GetStaticPropsContext } from 'next';
import { getAllEvents, getEventById } from '../../src/helpers/eventsApi';
import EventDetailView from '../../src/pages/EventDetail/EventDetailView';
import IEventDetail from '../../src/pages/EventDetail/interfaces/IEventDetail';
import IEventDetailParams from '../../src/pages/EventDetail/interfaces/IEventDetailParams';

function EventDetail({ event }: IEventDetail) {
  return <EventDetailView event={event} />;
}

export async function getStaticPaths() {
  const allEvents = await getAllEvents();

  return {
    paths: allEvents.map((event) => ({
      params: {
        eventId: event.id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<IEventDetailParams>
) {
  const eventId = context.params?.eventId;

  if (!eventId) {
    return;
  }

  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
  };
}

export default EventDetail;
