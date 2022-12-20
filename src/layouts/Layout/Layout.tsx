import classNames from 'classnames';
import Header from './components/Header';
import ILayout from './interfaces/ILayout';

function Layout({ children, containerClass }: ILayout) {
  const containerClasses = classNames('container', containerClass);

  return (
    <>
      <Header />
      <div className={containerClasses}>{children}</div>
    </>
  );
}

export default Layout;
