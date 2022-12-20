import classNames from 'classnames';
import { useRouter } from 'next/router';
import IconArrowLeft from '../svgIcons/IconArrowLeft';
import IBackButton from './interfaces/IBackButton';
import classes from './scss/BackButton.module.scss';

function BackButton({containerClassName}: IBackButton) {
  const router = useRouter();
  const containerClasses = classNames(classes.container, containerClassName)

  return (
    <button onClick={() => router.back()} className={containerClasses}>
      <IconArrowLeft width={30} height={30} />
    </button>
  );
}

export default BackButton;
