import Link from 'next/link';
import IconDate from '../../../components/svgIcons/IconDate';
import classes from '../scss/Logo.module.scss';

function Logo() {
  return (
    <Link href="/" className={classes.container}>
      <IconDate width={35} height={35} />
      <h2>Next Events</h2>
    </Link>
  );
}

export default Logo;
