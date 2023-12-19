import styles from './Menu.module.scss';
import { Heading } from '@/components/Heading';
import { Search } from '@/components/Search';
import { PREFIX } from '@/helpers/API';
import { ChangeEvent, useEffect, useState } from 'react';
import { ProductInterface } from '@/interfaces/product.interface';
import axios, { AxiosError } from 'axios';
import { MenuList } from '@/pages/Menu/MenuList';


export const Menu = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [filter, setFilter] = useState<string>();

  const getMenu = async (name?: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<ProductInterface[]>(`${PREFIX}/products`, {
        params: {
          name
        }
      });
      setProducts(data);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    getMenu(filter);
  }, [filter]);

  return (<>
    <div className={styles['head']}>
      <Heading>Меню</Heading>
      <Search placeholder='Введите блюдо или состав' onChange={updateFilter} />
    </div>
    <div>
      {error && <>{error}</>}
      {!isLoading && products.length > 0 && <MenuList products={products} />}
      {isLoading && <>Загружаем продукты...</>}
      {!isLoading && products.length === 0 && <>Не найдено блюд по запросу</>}
    </div>
  </>);
};
