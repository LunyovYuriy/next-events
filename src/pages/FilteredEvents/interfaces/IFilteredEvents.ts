import IEvent from "../../../interfaces/IEvent";

export default interface IFilteredEvents {
  isDateValid: boolean,
  filteredEvents?: IEvent[],
  readableDate?: string,
}