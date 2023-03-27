import IComment from '../../../interfaces/IComment';

export default interface IComments {
  eventId: string;
  addComment?: (comment: IComment) => void;
}
