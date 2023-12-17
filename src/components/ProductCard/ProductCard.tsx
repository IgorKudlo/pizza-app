import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { ProductCardProps } from './ProductCard.props';

export const ProductCard = (props: ProductCardProps) => {
  const { id, image, price, rating, title, description } = props;

  return (
    <Link to={`/product/${id}`} className={styles['link']}>
      <div className={styles['card']}>
        <div className={styles['head']} style={{ backgroundImage: `url('${image}')` }}>
          <div className={styles['price']}>
            {price}&nbsp;
            <span className={styles['currency']}>₽</span>
          </div>
          <button className={styles['add-to-cart']}>
            <img src="/cart-button-icon.svg" alt="Добавить в корзину" />
          </button>
          <div className={styles['rating']}>
            {rating}&nbsp;
            <img src="/star-icon.svg" alt="Иконка звезды" />
          </div>
        </div>
        <div className={styles['footer']}>
          <div className={styles['title']}>{title}</div>
          <div className={styles['description']}>{description}</div>
        </div>
      </div>
    </Link>
  );
};