import React from 'react';
import IEventItemDate from '../interfaces/IEventItemDate';
import classes from '../scss/EventItemDate.module.scss';
import IconDate from '../../svgIcons/IconDate';

function EventItemDate({ date }: IEventItemDate) {
  return (
    <div className={classes.container}>
      <IconDate width={25} height={25} />
      <time className={classes.label}>{date}</time>
    </div>
  );
}

export default EventItemDate;
