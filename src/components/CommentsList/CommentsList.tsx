import IComment from '../../interfaces/IComment';
import ICommentsList from './interfaces/ICommentsList';
import classes from './scss/CommentsList.module.scss';

function CommentsList({ items }: ICommentsList) {
  return (
    <>
      {items.map(({ id, name, email, text }: IComment) => (
        <div className={classes.container} key={id}>
          <div className={classes.row}>
            <strong>{name}</strong>
            <span> - </span>
            <span>{email}</span>
          </div>
          <p>{text}</p>
        </div>
      ))}
    </>
  );
}

export default CommentsList;
