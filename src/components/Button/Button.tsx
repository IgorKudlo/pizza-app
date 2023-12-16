import styles from './Button.module.scss';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

export const Button = (props: ButtonProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <button className={cn(styles['button'], styles['accent'], className)} {...otherProps}>{children}</button>
  );
};
