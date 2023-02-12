import { API_URL } from '../constants/api';
import IEvent from '../interfaces/IEvent';
import IEventDateFilter from '../interfaces/IEventDateFilter';
import apiRequest from './api';

export async function getAllEvents(
  queryParams?: string
): Promise<IEvent[] | null> {
  try {
    const data = await apiRequest.get(
      `${API_URL}/events.json${queryParams ? `?${queryParams}` : ''}`
    );

    const events = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));

    return events;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getFeaturedEvents(): Promise<IEvent[] | null> {
  try {
    const featuredEvents = await getAllEvents(
      'orderBy="isFeatured"&startAt=true'
    );

    return featuredEvents;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getEventById(eventId: string): Promise<IEvent[] | null> {
  try {
    const data = await apiRequest.get(`${API_URL}/events/${eventId}.json`);

    return {
      id: eventId,
      ...data,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getFilteredEvents(
  dateFilter: IEventDateFilter
): Promise<IEvent[] | null> {
  try {
    const { year, month } = dateFilter;
    const dateString = `${year}-${String(month).padStart(2, '0')}`;

    const filteredEvents = await getAllEvents(
      'orderBy="date"' +
        `&startAt="${dateString}"` +
        `&endAt="${dateString}\uf8ff"` +
        '&once="value"'
    );

    return filteredEvents;
  } catch (error) {
    console.log(error);
    return null;
  }
}
