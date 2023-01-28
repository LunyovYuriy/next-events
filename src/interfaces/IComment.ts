export default interface IComment {
  _id?: string;
  eventId?: string | string[];
  name: string;
  email: string;
  text: string;
}
