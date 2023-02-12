import { FetchEventResult } from 'next/dist/server/web/types';
import { FormEvent, useContext, useState } from 'react';
import NotificationContext from '../../context/NotificationContext/NotificationContext';
import apiRequest from '../../helpers/api';
import Button from '../Button/Button';
import classes from './scss/NewsLetterRegistration.module.scss';

function NewsLetterRegistration() {
  const [email, setEmail] = useState('');
  const { showNotification } = useContext(NotificationContext);

  const registrationHandler = (event: FormEvent) => {
    event.preventDefault();

    showNotification({
      title: 'Signing up...',
      message: 'Registering for newsletter',
      status: 'pending',
    });

    apiRequest
      .post('/api/newsletter', {
        email,
      })
      .then(() => {
        showNotification({
          title: 'Success!',
          message: 'Signed up successfully',
          status: 'success',
        });
        setEmail('');
      })
      .catch((error) => {
        showNotification({
          title: 'Error!',
          message: error?.message || 'Something went wrong',
          status: 'error',
        });
      });
  };

  return (
    <section className={classes.container}>
      <h2>Sign up to stay updated</h2>
      <form
        className={classes.form}
        onSubmit={(event) => registrationHandler(event)}
      >
        <div className={classes.formGroup}>
          <input
            className="input-main"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Your email"
          />
          <Button type="submit" label="Submit" />
        </div>
      </form>
    </section>
  );
}

export default NewsLetterRegistration;
