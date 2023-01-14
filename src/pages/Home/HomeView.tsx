import EventsList from '../../components/EventsList/EventsList';
import NewsLetterRegistration from '../../components/NewsLetterRegistration/NewsLetterRegistration';
import IHome from './interfaces/IHome';

function HomeView({ featuredEvents }: IHome) {
  return (
    <>
      <NewsLetterRegistration />
      <EventsList list={featuredEvents} />
    </>
  );
}

export default HomeView;
