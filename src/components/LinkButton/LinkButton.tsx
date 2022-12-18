import classNames from 'classnames';
import Link from 'next/link';
import ILinkButton from './interfaces/ILinkButton';
import classes from './scss/LinkButton.module.scss';

function LinkButton({ url, label, iconRight, className }: ILinkButton) {
  const buttonClasses = classNames(classes.button, className);

  return (
    <Link href={url} className={buttonClasses}>
      <span className={classes.label}>{label}</span>
      {iconRight && <div className={classes.iconContainer}>{iconRight}</div>}
    </Link>
  );
}

export default LinkButton;
