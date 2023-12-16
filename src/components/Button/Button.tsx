import cn from 'classnames';
import { ButtonProps } from './Button.props';

export const Button = (props: ButtonProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <button className={cn('button accent', className)} {...otherProps}>{children}</button>
  );
};
