import Link from 'next/link';
import classes from '../scss/Navigation.module.scss';

function Navigation() {
  return (
    <ul className={classes.navigation}>
      <li>
        <Link href="/events">All Events</Link>
      </li>
    </ul>
  );
}

export default Navigation;
