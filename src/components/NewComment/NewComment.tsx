import { FormEvent, useContext, useState } from 'react';
import Button from '../Button/Button';
import IComments from '../Comments/interfaces/IComments';
import classes from './scss/NewComment.module.scss';
import apiRequest from '../../helpers/api';
import NotificationContext from '../../context/NotificationContext/NotificationContext';

function NewComment({ eventId, addComment }: IComments) {
  const { showNotification } = useContext(NotificationContext);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const clearForm = () => {
    setEmail('');
    setName('');
    setText('');
    setError('');
  };

  const validate = () => {
    let result = true;

    if (!email.length && !name.length && !text.length) {
      setError('Please fill out the fields');
      result = false;
    }

    if (!email.length) {
      setError('Please enter your email');
      result = false;
    } else if (!name.length) {
      setError('Please enter your name');
      result = false;
    } else if (!text.length) {
      setError('Please enter your comment');
      result = false;
    }

    return result;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const isValid = validate();
    if (isValid) {
      showNotification({
        title: 'Posting...',
        message: 'Adding your comment',
        status: 'pending',
      });
      apiRequest
        .post(`/api/comments/${eventId}/`, {
          email,
          name,
          text,
        })
        .then((data) => {
          showNotification({
            title: 'Success!',
            message: 'Your comment has been added',
            status: 'success',
          });
          const {resultComment} = data || {};

          addComment(resultComment);
          clearForm();
        })
        .catch(() => {
          showNotification({
            title: 'Error!',
            message:
              'An error occurred during posting your comment, please try again later',
            status: 'error',
          });
        });
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
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></textarea>
      </div>
      {error && <p className="error-text">{error}</p>}
      <Button label="Submit" type="submit" className={classes.button} />
    </form>
  );
}

export default NewComment;
