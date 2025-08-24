import clsx from 'clsx';
import { SpinnerProps } from './types';
import styles from './Spinner.module.scss';

export const Spinner = (props: SpinnerProps) => {
  const { className, isCenter } = props;

  return (
    <div
      className={clsx(styles.wrapper, className, {
        [styles.center]: isCenter,
      })}
    >
      <span className={styles.spinner} />
    </div>
  );
};
