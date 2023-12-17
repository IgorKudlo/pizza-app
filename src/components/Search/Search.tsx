import styles from './Search.module.scss';
import { forwardRef } from 'react';
import cn from 'classnames';
import { SearchProps } from './Search.props';

export const Search = forwardRef<HTMLInputElement, SearchProps>((props, ref) => {
  const { isValid = true, className, ...otherProps } = props;

  return (
    <div className={styles['input-wrapper']}>
      <input ref={ref} className={cn(styles['input'], className, {
        [styles['invalid']]: isValid
      })} {...otherProps} />
      <img className={styles['icon']} src='/search-icon.svg' alt='Иконка лупы' />
    </div>
  );
});
