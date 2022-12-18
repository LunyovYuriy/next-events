import Link from 'next/link';
import ILinkButton from './interfaces/ILinkButton';
import classes from './scss/LinkButton.module.scss';

function LinkButton({url}: ILinkButton) {
  return (
    <Link href={url} className={classes.button}>
      Explore event
    </Link>
  );
}

export default LinkButton;
