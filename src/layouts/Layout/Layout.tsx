import Link from 'next/link';
import ILayout from './interfaces/ILayout';
import styles from './scss/Layout.module.scss';

function Layout({ children }: ILayout) {
  return (
    <div className={styles.container}>
      <ul className={styles.navigation}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}

export default Layout;
