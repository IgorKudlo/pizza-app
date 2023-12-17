import { ProductCard } from '@/components/ProductCard';
import { MenuListProps } from '@/pages/Menu/MenuList/MenuList.props';

export const MenuList = (props: MenuListProps) => {
  const { products } = props;

  return (
    <>
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
    </>
  );
};
