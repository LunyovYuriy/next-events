import IFeedback from './interfaces/IFeedback';
import classes from './scss/FeedbackView.module.scss';

function FeedbackView({
  formValues,
  setFieldValue,
  onSubmit,
  feedbacks,
}: IFeedback) {
  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={onSubmit}>
        <h2>Leave your feedback</h2>
        <div className={classes.formGroup}>
          <label htmlFor="email" className={classes.label}>
            Your Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formValues.email}
            onChange={(event) =>
              setFieldValue({
                fieldName: 'email',
                value: event.target.value,
              })
            }
            className={classes.input}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="feedback" className={classes.label}>
            Your Feedback
          </label>
          <textarea
            id="feedback"
            rows={5}
            value={formValues.text}
            onChange={(event) =>
              setFieldValue({
                fieldName: 'text',
                value: event.target.value,
              })
            }
            className={classes.input}
          />
        </div>
        <button type="submit" className={classes.submit}>
          Send Feedback
        </button>
      </form>
      {!!feedbacks?.length && (
        <div className={classes.feedbacksContainer}>
          <h2>Feedbacks from our users</h2>
          <ul className={classes.feedbacksList}>
            {feedbacks.map((feedback) => (
              <li key={feedback.id} className={classes.feedbackItem}>
                <span className={classes.feedbackEmail}>{feedback.email}</span>
                <span className={classes.feedbackText}>{feedback.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FeedbackView;
