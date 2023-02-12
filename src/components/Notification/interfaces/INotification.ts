export default interface INotification {
  title: string,
  message: string,
  status: 'success' | 'pending' | 'error'
}
