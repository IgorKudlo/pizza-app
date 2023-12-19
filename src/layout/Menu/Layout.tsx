import styles from './Layout.module.scss';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { Button } from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { getProfile, userActions } from '@/store/user.slice';
import { useEffect } from 'react';

export const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const profile = useSelector((state: RootState) => state.user.profile);
  const items = useSelector((s: RootState) => s.cart.items);

  const logout = () => {
    dispatch(userActions.logout());
    navigate('/auth/login');
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <div className={styles['layout']}>
      <div className={styles['sidebar']}>
        <div className={styles['user']}>
          <img className={styles['avatar']} src="/avatar.png" alt="Аватар пользователя" />
          <div className={styles['name']}>{profile?.name}</div>
          <div className={styles['email']}>{profile?.email}</div>
        </div>
        <div className={styles['menu']}>
          <NavLink
            to='/'
            className={({ isActive }) => cn(styles['link'], {
              [styles.active]: isActive
            })}
          >
            <img src="/menu-icon.svg" alt="Иконка меню" />
            Меню</NavLink>
          <NavLink
            to='/cart'
            className={({ isActive }) => cn(styles['link'], {
              [styles.active]: isActive
            })}
          >
            <img src="/cart-icon.svg" alt="Иконка корзины"/>Корзина <span
              className={styles['cart-count']}>{items.reduce((acc, item) => acc += item.count, 0)}</span>
          </NavLink>
        </div>
        <Button className={styles['exit']} onClick={logout}>
          <img src="/exit-icon.svg" alt="Иконка выхода" />
          Выход
        </Button>
      </div>
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  );
};
