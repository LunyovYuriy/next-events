import { GetServerSidePropsContext } from 'next';
import { getFilteredEvents } from '../../src/helpers/eventsApi';
import FilteredEventsView from '../../src/pages/FilteredEvents/FilteredEventsView';
import IFilteredEvents from '../../src/pages/FilteredEvents/interfaces/IFilteredEvents';

function FilteredEvents({ isDateValid, filteredEvents, readableDate }: IFilteredEvents) {
  return (
    <FilteredEventsView
      isDateValid={isDateValid}
      filteredEvents={filteredEvents}
      readableDate={readableDate}
    />
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;

  const filterData = params?.slug;
  const [year, month] = filterData || [];

  const numYear = Number(year);
  const numMonth = Number(month);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > Number(new Date().getFullYear) + 10 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        isDateValid: false,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  const readableDate = new Date(`${year}-${month}-1`).toLocaleDateString(
    'en-US',
    {
      month: 'long',
      year: 'numeric',
    }
  );

  return {
    props: {
      isDateValid: true,
      filteredEvents,
      readableDate,
    },
  };
}

export default FilteredEvents;
