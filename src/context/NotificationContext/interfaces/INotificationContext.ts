import INotification from '../../../components/Notification/interfaces/INotification';

export default interface INotificationContext {
  notification: INotification | null;
  showNotification: (notificationData: INotification) => void;
  hideNotification: () => void;
}
