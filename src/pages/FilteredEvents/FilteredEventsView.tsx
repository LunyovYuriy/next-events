import List from './components/List';
import ListEmpty from './components/ListEmpty';
import IFilteredEvents from './interfaces/IFilteredEvents';

function FilteredEventsView({
  isDateValid,
  filteredEvents,
  readableDate,
}: IFilteredEvents) {
  return (
    <>
      {isDateValid ? (
        <>
          {filteredEvents?.length ? (
            <List date={readableDate || '-'} events={filteredEvents} />
          ) : (
            <ListEmpty date={readableDate || '-'} />
          )}
        </>
      ) : (
        <p>Invalid date</p>
      )}
    </>
  );
}

export default FilteredEventsView;
