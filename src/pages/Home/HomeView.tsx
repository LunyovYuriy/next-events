import EventsList from '../../components/EventsList/EventsList';
import { getFeaturedEvents } from '../../mocks/mock-data';

function HomeView() {
  const featuredEvents = getFeaturedEvents();

  return <EventsList list={featuredEvents} />;
}

export default HomeView;
