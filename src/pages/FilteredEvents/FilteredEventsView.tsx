import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import EventsList from '../../components/EventsList/EventsList';
import IEvent from '../../interfaces/IEvent';
import { getFilteredEvents } from '../../mocks/mock-data';
import List from './components/List';
import ListEmpty from './components/ListEmpty';

function FilteredEventsView() {
  const [filteredEvents, setFilteredEvents] = useState<IEvent[]>([]);
  const router = useRouter();
  const [year, month] = router.query.slug || [];
  const isLoading = !(year && month);

  const getFilteredData = useCallback(() => {
    if (year && month) {
      const filteredData = getFilteredEvents({
        year: Number(year),
        month: Number(month),
      });
      setFilteredEvents(filteredData);
    }
  }, [month, year]);

  useEffect(() => {
    getFilteredData();
  }, [getFilteredData]);

  const date = new Date(`${year}-${month}-1`).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const isDateValid = (year: number, month: number): boolean => {
    return isNaN(year) ||
    isNaN(month) ||
    year > Number(new Date().getFullYear) + 10 ||
    month < 1 ||
    month > 12 ? false : true
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {isDateValid(Number(year), Number(month)) ? (
            <>
              {filteredEvents.length ? (
                <List date={date} events={filteredEvents} />
              ) : (
                <ListEmpty date={date} />
              )}
            </>
          ) : (
            <p>Invalid date</p>
          )}
        </>
      )}
    </>
  );
}

export default FilteredEventsView;
