import classNames from 'classnames';
import IButton from './interfaces/IButton';
import classes from './scss/Button.module.scss';

function Button({
  type = 'button',
  onClick,
  label,
  iconRight,
  className,
}: IButton) {
  const buttonClasses = classNames(classes.button, className);

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
    >
      <span className={classes.label}>{label}</span>
      {iconRight && <div className={classes.iconContainer}>{iconRight}</div>}
    </button>
  );
}

export default Button;
