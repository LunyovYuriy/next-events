import Head from 'next/head';
import { getFeaturedEvents } from '../src/helpers/eventsApi';
import HomeView from '../src/pages/Home/HomeView';
import IHome from '../src/pages/Home/interfaces/IHome';

function Home({ featuredEvents }: IHome) {
  return (
    <>
      <Head>
        <title>Next Events</title>
      </Head>
      <HomeView featuredEvents={featuredEvents} />
    </>
  );
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
