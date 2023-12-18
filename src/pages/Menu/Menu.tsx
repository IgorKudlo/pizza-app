import styles from './Menu.module.scss';
import { Heading } from '@/components/Heading';
import { Search } from '@/components/Search';
import { PREFIX } from '@/helpers/API';
import { useEffect, useState } from 'react';
import { ProductInterface } from '@/interfaces/product.interface';
import axios, { AxiosError } from 'axios';
import { MenuList } from '@/pages/Menu/MenuList';


export const Menu = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const getMenu = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<ProductInterface[]>(`${PREFIX}/products`);
      setProducts(data);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
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
      {error && <>{error}</>}
      {isLoading && <>Загружаем продукт...</>}
      {!isLoading && <MenuList products={products}/>}
    </div>
  </>);
};
