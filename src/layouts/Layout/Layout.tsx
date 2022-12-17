import classNames from 'classnames';
import Link from 'next/link';
import ILayout from './interfaces/ILayout';
import styles from './scss/Layout.module.scss';

function Layout({ children, containerClass }: ILayout) {
  const containerClassNames = classNames('container', containerClass);

  return (
    <>
      <ul className={styles.navigation}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
      </ul>
      <div className={containerClassNames}>{children}</div>
    </>
  );
}

export default Layout;
