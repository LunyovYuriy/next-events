import EventDate from '../../../components/EventDate/EventDate';
import EventLocation from '../../../components/EventLocation/EventLocation';
import IEventLogistic from '../interfaces/IEventLogistic';
import classes from '../scss/EventLogistic.module.scss';

function EventLogistic({ date, location }: IEventLogistic) {
  const readableDate = date
    ? new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '-';

  return (
    <div className={classes.container}>
      <EventDate date={readableDate} containerClass={classes.dateContainer} />
      <EventLocation text={location || '-'} />
    </div>
  );
}

export default EventLogistic;
