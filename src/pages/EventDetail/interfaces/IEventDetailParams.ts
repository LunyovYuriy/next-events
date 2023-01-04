import { ParsedUrlQuery } from 'querystring';

export default interface IEventDetailParams extends ParsedUrlQuery {
  eventId: string;
}
