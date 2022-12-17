import Image from 'next/image';
import Link from 'next/link';
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
        src={`/${image}`}
        alt={title}
        className={classes.image}
      />
      <div className={classes.infoContainer}>
        <h3 className={classes.title}>{title}</h3>
        <time className={classes.date}>{readableDate}</time>
        <address className={classes.location}>{formattedLocation}</address>
        <p className={classes.description}>{description}</p>
        <Link href={`/events/${id}`} className={classes.link}>
          Explore event
        </Link>
      </div>
    </li>
  );
}

export default EventItem;
