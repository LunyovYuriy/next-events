import React, { useState } from 'react';
import Button from '../../../components/Button/Button';
import IEventSearch from '../interfaces/IEventSearch';
import classes from '../scss/EventSearch.module.scss';

function EventsSearch({onSearch}: IEventSearch) {
  const currentDate = new Date();
  const currentYear = String(currentDate.getFullYear());
  const currentMonth = String(currentDate.getMonth() + 1);

  const [yearValue, setYearValue] = useState(currentYear);
  const [monthValue, setMonthValue] = useState(currentMonth);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    onSearch(yearValue, monthValue);
  };

  return (
    <form className={classes.container} onSubmit={submitHandler}>
      <div className={classes.formControl}>
        <label htmlFor="year" className={classes.formLabel}>
          Year
        </label>
        <select
          name="year"
          id="year"
          value={yearValue}
          onChange={(event) => setYearValue(event.target.value)}
          className={classes.formSelect}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
      <div className={classes.formControl}>
        <label htmlFor="month" className={classes.formLabel}>
          Month
        </label>
        <select
          name="month"
          id="month"
          value={monthValue}
          onChange={(event) => setMonthValue(event.target.value)}
          className={classes.formSelect}
        >
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <Button
        label="Find Events"
        className={classes.formButton}
        type="submit"
      />
    </form>
  );
}

export default EventsSearch;
