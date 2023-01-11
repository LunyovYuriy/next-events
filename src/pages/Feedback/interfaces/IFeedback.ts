import React from 'react';
import IFeedbacks from './IFeedbacks';
import ISetFieldValueParams from './ISetFieldValueParams';

export default interface IFeedback {
  formValues: {
    email: string;
    text: string;
  };
  setFieldValue: ({ fieldName, value }: ISetFieldValueParams) => void;
  onSubmit: (event: React.FormEvent) => void;
  feedbacks: IFeedbacks[],
}
