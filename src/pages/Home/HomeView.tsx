import EventsList from '../../components/EventsList/EventsList';
import Layout from '../../layouts/Layout/Layout';
import { getFeaturedEvents } from '../../mocks/mock-data';

function HomeView() {
  const featuredEvents = getFeaturedEvents();

  return (
      <EventsList list={featuredEvents} />
  );
}

export default HomeView;
