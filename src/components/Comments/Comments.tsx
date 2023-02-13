import { useCallback, useEffect, useState } from 'react';
import apiRequest from '../../helpers/api';
import IComment from '../../interfaces/IComment';
import Button from '../Button/Button';
import CommentsList from '../CommentsList/CommentsList';
import NewComment from '../NewComment/NewComment';
import IComments from './interfaces/IComments';
import classes from './scss/Comments.module.scss';

function Comments({ eventId }: IComments) {
  const [commentsVisible, setCommentsVisibility] = useState(false);
  const [commentsList, setCommentsList] = useState<IComment[]>([]);
  const [commentsLoading, setCommentsLoading] = useState(false);

  const getCommentsList = useCallback(() => {
    setCommentsLoading(true);
    apiRequest
      .get(`/api/comments/${eventId}`)
      .then((data) => {
        setCommentsList(data?.comments);
        setCommentsLoading(false);
      })
      .catch(() => setCommentsLoading(false));
  }, [eventId]);

  const addComment = useCallback((comment: IComment) => {
    setCommentsList((prevComments) => [comment, ...prevComments]);
  }, []);

  useEffect(() => {
    if (commentsVisible) {
      getCommentsList();
    }
  }, [commentsVisible, eventId, getCommentsList]);

  return (
    <section className={classes.container}>
      <Button
        label={commentsVisible ? 'Hide comments' : 'Show comments'}
        onClick={() => setCommentsVisibility(!commentsVisible)}
      />
      {commentsVisible && (
        <>
          <NewComment eventId={eventId} addComment={addComment} />
          {commentsLoading ? (
            <p>Loading....</p>
          ) : (
            <CommentsList items={commentsList} />
          )}
        </>
      )}
    </section>
  );
}

export default Comments;
