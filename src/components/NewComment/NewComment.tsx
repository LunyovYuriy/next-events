import { FormEvent, useState } from 'react';
import Button from '../Button/Button';
import classes from './scss/NewComment.module.scss';

function NewComment() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const validate = () => {
    let result = true;

    if (!email.length && !name.length && !comment.length) {
      setError('Please fill out the fields');
      result = false;
    }

    if (!email.length) {
      setError('Please enter your email');
      result = false;
    } else if (!name.length) {
      setError('Please enter your name');
      result = false;
    } else if (!comment.length) {
      setError('Please enter your comment');
      result = false;
    }

    return result;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const isValid = validate();
    if (isValid) {
      // fetch POST data
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.row}>
        <div className={classes.formControl}>
          <label htmlFor="email" className={classes.label}>
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="input-main"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="name" className={classes.label}>
            Your name
          </label>
          <input
            type="text"
            id="name"
            className="input-main"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
      </div>
      <div className={classes.formControl}>
        <label htmlFor="comment" className={classes.label}>
          Your comment
        </label>
        <textarea
          id="comment"
          rows={5}
          className="input-main"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
      </div>
      {error && <p className="error-text">{error}</p>}
      <Button label="Submit" type="submit" className={classes.button} />
    </form>
  );
}

export default NewComment;
