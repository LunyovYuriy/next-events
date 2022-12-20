import IconLocation from '../svgIcons/IconLocation';
import IEventLocation from './interfaces/IEventLocation';
import classes from './scss/EventLocation.module.scss';

function EventLocation({ text }: IEventLocation) {
  return (
    <div className={classes.container}>
      <IconLocation width={25} height={25} />
      <address className={classes.text}>{text}</address>
    </div>
  );
}

export default EventLocation;
