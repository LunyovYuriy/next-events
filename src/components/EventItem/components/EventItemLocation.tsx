import IconLocation from '../../svgIcons/IconLocation';
import IEventItemLocation from '../interfaces/IEventItemLocation';
import classes from '../scss/EventItemLocation.module.scss';

function EventItemLocation({ text }: IEventItemLocation) {
  return (
    <div className={classes.container}>
      <IconLocation width={25} height={25} />
      <address className={classes.text}>{text}</address>
    </div>
  );
}

export default EventItemLocation;
