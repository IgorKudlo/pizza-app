import styles from './Input.module.scss';
import cn from 'classnames';
import { forwardRef } from 'react';
import { InputProps } from '@/components/Input/Input.props';

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, isValid = true, ...otherProps } = props;

  return (
    <input ref={ref} className={cn(styles['input'], className, {
      [styles['invalid']]: isValid
    })} type="text" {...otherProps}/>
  );
});
