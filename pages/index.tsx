import { getFeaturedEvents } from '../src/helpers/eventsApi';
import HomeView from '../src/pages/Home/HomeView';
import IHome from '../src/pages/Home/interfaces/IHome';

function Home({ featuredEvents }: IHome) {
  return <HomeView featuredEvents={featuredEvents} />;
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 300,
  };
}

export default Home;
