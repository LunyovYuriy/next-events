import Image from 'next/image';
import BackButton from '../../components/BackButton/BackButton';
import Comments from '../../components/Comments/Comments';
import NewComment from '../../components/NewComment/NewComment';
import EventInfo from './components/EventInfo';
import IEventDetail from './interfaces/IEventDetail';
import classes from './scss/EventDetail.module.scss';

function EventDetailView({ event }: IEventDetail) {
  return (
    <>
      <div className={classes.container}>
        <BackButton containerClassName={classes.backButton} />
        <Image
          className={classes.cover}
          src={event?.image}
          alt={String(event?.title)}
          width={600}
          height={300}
        />
        <EventInfo
          title={event?.title}
          date={event?.date}
          description={event?.description}
          location={event?.location}
        />
      </div>
      <Comments />
    </>
  );
}

export default EventDetailView;
