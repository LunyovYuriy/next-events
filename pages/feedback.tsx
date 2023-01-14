import React, { useCallback, useState } from 'react';
import apiRequest from '../src/helpers/api';
import FeedbackView from '../src/pages/Feedback/FeedbackView';
import IFeedbacks from '../src/pages/Feedback/interfaces/IFeedbacks';
import ISetFieldValueParams from '../src/pages/Feedback/interfaces/ISetFieldValueParams';
import { extractFeedback } from './api/feedback';

function Feedback({ feedbackItems }: { feedbackItems: IFeedbacks[] }) {
  const [feedbacks, setFeedbacks] = useState<IFeedbacks[]>(feedbackItems);
  const [formState, setFormState] = useState({
    email: '',
    text: '',
  });

  const clearFormState = () =>
    setFormState({
      email: '',
      text: '',
    });

  const setFieldValue = useCallback(
    ({ fieldName, value }: ISetFieldValueParams) => {
      setFormState((prevState) => ({
        ...prevState,
        [fieldName]: value,
      }));
    },
    []
  );

  const submitHandler = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      apiRequest.post('/api/feedback', {
        email: formState.email,
          text: formState.text,
      }).then((data) => {
        clearFormState();
        setFeedbacks((prevFeedbacks) => [...prevFeedbacks, data.feedback]);
      })
    },
    [formState.email, formState.text]
  );

  const loadFeedback = (feedbackId: string) => {
    apiRequest.get(`/api/feedback/${feedbackId}`)
      .then((data) => {
        alert(
          'Feedback Detail:' +
            `\nID: ${data.feedback.id}` +
            `\nEMAIL: ${data.feedback.email}` +
            `\nTEXT: ${data.feedback.text}`
        );
      })
  };

  return (
    <FeedbackView
      formValues={formState}
      feedbacks={feedbacks}
      setFieldValue={setFieldValue}
      onSubmit={submitHandler}
      onLoad={loadFeedback}
    />
  );
}

export async function getStaticProps() {
  const feedbackItems = extractFeedback();
  return {
    props: {
      feedbackItems,
    },
  };
}

export default Feedback;
