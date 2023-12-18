import styles from './Auth.module.scss';
import { Outlet } from 'react-router-dom';

export function Auth() {
  return <div className={styles['layout']}>
    <div className={styles['logo']}>
      <img src="/logo.svg" alt="Логотип компании" />
    </div>
    <div className={styles['content']}>
      <Outlet />
    </div>
  </div>;
}