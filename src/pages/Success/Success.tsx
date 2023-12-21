import styles from './Success.module.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/Button/Button';

export function Success() {
  const navigate = useNavigate();
  return (
    <div className={styles['success']}>
      <img src="/pizza.png" alt="Изображение пиццы" />
      <div className={styles['text']}>Ваш заказ успешно оформлен!</div>
      <Button appearance="big" onClick={() => navigate('/')}>Сделать новый</Button>
    </div>
  );
}