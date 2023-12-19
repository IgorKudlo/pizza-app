import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { ProductCardProps } from './ProductCard.props';
import { AppDispatch } from '@/store/store';
import { cartActions } from '@/store/cart.slice';

export const ProductCard = (props: ProductCardProps) => {
  const { id, image, price, rating, name, description } = props;

  const dispatch = useDispatch<AppDispatch>();

  const add = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(cartActions.add(props.id));
  };

  return (
    <Link to={`/product/${id}`} className={styles['link']}>
      <div className={styles['card']}>
        <div className={styles['head']} style={{ backgroundImage: `url('${image}')` }}>
          <div className={styles['price']}>
            {price}&nbsp;
            <span className={styles['currency']}>₽</span>
          </div>
          <button className={styles['add-to-cart']} onClick={add}>
            <img src="/cart-button-icon.svg" alt="Добавить в корзину" />
          </button>
          <div className={styles['rating']}>
            {rating}&nbsp;
            <img src="/star-icon.svg" alt="Иконка звезды" />
          </div>
        </div>
        <div className={styles['footer']}>
          <div className={styles['title']}>{name}</div>
          <div className={styles['description']}>{description}</div>
        </div>
      </div>
    </Link>
  );
};
