import styles from './Heading.module.scss';
import cn from 'classnames';
import { HeadingProps } from './Heading.props';

export const Heading = (props: HeadingProps) => {
  const { children, className, ...otherProps } = props;

  return (
    <h1 className={cn(className, styles['h1'])} {...otherProps}>{children}</h1>
  );
};