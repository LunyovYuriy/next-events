import EventsList from '../../components/EventsList/EventsList';
import IHome from './interfaces/IHome';

function HomeView({ featuredEvents }: IHome) {
  return <EventsList list={featuredEvents} />;
}

export default HomeView;
