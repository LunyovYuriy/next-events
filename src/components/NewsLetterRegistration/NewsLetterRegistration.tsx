import { FormEvent, useState } from 'react';
import Button from '../Button/Button';
import classes from './scss/NewsLetterRegistration.module.scss';

function NewsLetterRegistration() {
  const [email, setEmail] = useState('');

  const registrationHandler = (event: FormEvent) => {
    event.preventDefault();

    // fetch POST user email
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