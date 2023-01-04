import { API_URL } from '../constants/api';
import IEvent from '../interfaces/IEvent';

export async function getAllEvents(queryParams: string): Promise<IEvent[]> {
  const response = await fetch(
    `${API_URL}/events.json${queryParams ? `?${queryParams}` : ''}`
  );
  const data = await response.json();

  const events = Object.keys(data).map((key) => ({
    id: key,
    ...data[key],
  }));

  return events;
}

export async function getFeaturedEvents(): Promise<IEvent[]> {
  const featuredEvents = await getAllEvents('orderBy="isFeatured"&startAt=true');

  return featuredEvents;
}
