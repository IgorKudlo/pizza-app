import styles from './Button.module.scss';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

export const Button = (props: ButtonProps) => {
  const { className, children, appearance = 'small', ...otherProps } = props;

  return (
    <button className={cn(styles['button'], styles['accent'], className, {
      [styles['small']]: appearance === 'small',
      [styles['big']]: appearance === 'big'
    })} {...otherProps}>{children}</button>
  );
};
