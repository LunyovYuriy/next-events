import { useState } from 'react';
import Button from '../Button/Button';
import CommentsList from '../CommentsList/CommentsList';
import NewComment from '../NewComment/NewComment';
import classes from './scss/Comments.module.scss';

function Comments() {
  const [commentsVisible, setCommentsVisibility] = useState(false);
  return (
    <section className={classes.container}>
      <Button
        label={commentsVisible ? 'Hide comments' : 'Show comments'}
        onClick={() => setCommentsVisibility(!commentsVisible)}
      />
      {commentsVisible && (
        <>
          <NewComment />
          <CommentsList />
        </>
      )}
    </section>
  );
}

export default Comments;
