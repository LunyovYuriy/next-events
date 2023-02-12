import {useContext} from 'react';

import classes from './scss/Notification.module.scss';
import INotification from "./interfaces/INotification";
import NotificationContext from '../../context/NotificationContext/NotificationContext';
import classNames from "classnames";

function Notification({title, message, status}: INotification) {
  const {hideNotification} = useContext(NotificationContext);

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  if (status === 'pending') {
    statusClasses = classes.pending;
  }

  const activeClasses = classNames(classes.notification, statusClasses);

  return (
    <div className={activeClasses} onClick={hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
