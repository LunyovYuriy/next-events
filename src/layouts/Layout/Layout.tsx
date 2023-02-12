import classNames from 'classnames';
import { useContext, useEffect } from 'react';
import Notification from '../../components/Notification/Notification';
import NotificationContext from '../../context/NotificationContext/NotificationContext';
import Header from './components/Header';
import ILayout from './interfaces/ILayout';

function Layout({ children, containerClass }: ILayout) {
  const containerClasses = classNames('container', containerClass);
  const { notification: activeNotification } = useContext(NotificationContext);

  return (
    <>
      <Header />
      <div className={containerClasses}>{children}</div>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          status={activeNotification.status}
          message={activeNotification.message}
        />
      )}
    </>
  );
}

export default Layout;
