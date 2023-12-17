import styles from './MenuList.module.scss';
import { ProductCard } from '@/components/ProductCard';
import { MenuListProps } from '@/pages/Menu/MenuList/MenuList.props';

export const MenuList = (props: MenuListProps) => {
  const { products } = props;

  return (
    <div className={styles.wrapper}>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          name={p.name}
          description={p.ingredients.join(', ')}
          rating={p.rating}
          price={p.price}
          image={p.image}
        />
      ))}
    </div>
  );
};
