import React from 'react';

export default interface IButton {
  label: string;
  iconRight?: React.ReactNode;
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
