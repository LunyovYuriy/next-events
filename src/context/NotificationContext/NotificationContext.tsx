import { createContext, useEffect, useState } from 'react';
import INotification from '../../components/Notification/interfaces/INotification';
import INotificationContext from './interfaces/INotificationContext';

const NotificationContext = createContext<INotificationContext>({
  notification: null,
  showNotification: function () {},
  hideNotification: function () {},
});

export function NotificationContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [activeNotification, setActiveNotification] =
    useState<INotification | null>(null);

  function showNotificationHandler(notificationData: INotification) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  useEffect(() => {
    if (activeNotification && activeNotification.status !== 'pending') {
      const timer = setTimeout(() => {
        hideNotificationHandler();
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
