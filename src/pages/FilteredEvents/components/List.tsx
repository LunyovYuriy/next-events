import EventsList from '../../../components/EventsList/EventsList';
import IList from '../interfaces/IList';
import classes from '../scss/List.module.scss';

function List({ date, events }: IList) {
  return (
    <>
      <h1 className={classes.header}>Events for {date}</h1>
      <EventsList list={events} />
    </>
  );
}

export default List;
