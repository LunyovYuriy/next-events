import Link from 'next/link';
import Layout from '../../layouts/Layout/Layout';
import styles from './scss/HomeView.module.scss';

function HomeView() {
  return (
    <Layout>
      <h1 className={styles.title}>The Home Page</h1>
    </Layout>
  );
}

export default HomeView;
