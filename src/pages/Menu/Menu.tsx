import styles from './Menu.module.scss';
import { Heading } from '@/components/Heading';
import { Search } from '@/components/Search';
import { ProductCard } from '@/components/ProductCard';
import { PREFIX } from '@/helpers/API';
import { useEffect, useState } from 'react';
import { Product } from '@/interfaces/product';


export const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getMenu = async () => {
    try {
      const res = await fetch(`${PREFIX}/products`);
      if (!res.ok) {
        return;
      }
      const data = await res.json() as Product[];
      setProducts(data);
    } catch (e) {
      console.error(e);
      return;
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (<>
    <div className={styles['head']}>
      <Heading>Меню</Heading>
      <Search placeholder='Введите блюдо или состав'/>
    </div>
    <div>
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
  </>);
};
