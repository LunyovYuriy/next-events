import IEventDate from './interfaces/IEventDate';
import classes from './scss/EventDate.module.scss';
import IconDate from '../svgIcons/IconDate';
import classNames from 'classnames';

function EventDate({ date, containerClass }: IEventDate) {
  const containerClasses = classNames(classes.container, containerClass);
  return (
    <div className={containerClasses}>
      <IconDate width={25} height={25} />
      <time className={classes.label}>{date}</time>
    </div>
  );
}

export default EventDate;
