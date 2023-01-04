import Image from 'next/image';
import EventDate from '../EventDate/EventDate';
import EventLocation from '../EventLocation/EventLocation';
import LinkButton from '../LinkButton/LinkButton';
import IconArrowRight from '../svgIcons/IconArrowRight';
import IEventItem from './interfaces/IEventItem';
import classes from './scss/EventItem.module.scss';

function EventItem({ event }: IEventItem) {
  const { id, image, title, description, date, location } = event;

  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedLocation = location.replace(', ', '\n');

  return (
    <li className={classes.container}>
      <Image
        width={300}
        height={300}
        src={image}
        alt={title}
        className={classes.image}
      />
      <div className={classes.infoContainer}>
        <h3 className={classes.title}>{title}</h3>
        <EventDate date={readableDate} />
        <EventLocation text={formattedLocation} />
        <p className={classes.description}>{description}</p>
        <LinkButton
          url={`/events/${id}`}
          label="Explore Event"
          iconRight={<IconArrowRight width={20} height={20} />}
        />
      </div>
    </li>
  );
}

export default EventItem;
