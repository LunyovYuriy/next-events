import React, { useCallback, useEffect, useState } from 'react';
import FeedbackView from '../src/pages/Feedback/FeedbackView';
import IFeedbacks from '../src/pages/Feedback/interfaces/IFeedbacks';
import ISetFieldValueParams from '../src/pages/Feedback/interfaces/ISetFieldValueParams';

function Feedback() {
  const [feedbacks, setFeedbacks] = useState<IFeedbacks[]>([]);
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

      fetch('/api/feedback', {
        method: 'POST',
        body: JSON.stringify({
          email: formState.email,
          text: formState.text,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          clearFormState();
          setFeedbacks((prevFeedbacks) => [...prevFeedbacks, data.feedback]);
        });
    },
    [formState.email, formState.text]
  );

  const loadFeedbacks = useCallback(() => {
    fetch('/api/feedback')
      .then((response) => response.json())
      .then((data) => setFeedbacks(data.feedbacks));
  }, []);

  useEffect(() => {
    loadFeedbacks();
  }, [loadFeedbacks]);

  return (
    <FeedbackView
      formValues={formState}
      feedbacks={feedbacks}
      setFieldValue={setFieldValue}
      onSubmit={submitHandler}
    />
  );
}

export default Feedback;
