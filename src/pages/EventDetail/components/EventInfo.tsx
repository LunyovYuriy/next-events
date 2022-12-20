import IEventInfo from '../interfaces/IEventInfo';
import EventLogistic from './EventLogistic';
import classes from '../scss/EventInfo.module.scss';

function EventInfo({ title, description, date, location }: IEventInfo) {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title || '-'}</h2>
      <div className={classes.infoContainer}>
        <EventLogistic date={date} location={location} />
        <p>{description || '-'}</p>
      </div>
    </div>
  );
}

export default EventInfo;
