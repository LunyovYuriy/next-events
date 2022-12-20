import Image from 'next/image';
import { useRouter } from 'next/router';
import BackButton from '../../components/BackButton/BackButton';
import Layout from '../../layouts/Layout/Layout';
import { getEventById } from '../../mocks/mock-data';
import EventInfo from './components/EventInfo';
import classes from './scss/EventDetail.module.scss';

function EventDetailView() {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(String(eventId));

  return (
    <Layout>
      <div className={classes.container}>
        <BackButton containerClassName={classes.backButton} />
        <Image
          className={classes.cover}
          src={`/${event?.image}`}
          alt={String(event?.title)}
          width={300}
          height={300}
        />
        <EventInfo title={event?.title} date={event?.date} description={event?.description} location={event?.location} />
      </div>
    </Layout>
  );
}

export default EventDetailView;
