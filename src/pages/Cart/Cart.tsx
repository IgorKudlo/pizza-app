import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { Heading } from '@/components/Heading/Heading';
import { RootState } from '@/store/store';
import { CartItem } from '@/components/CartItem';
import { useEffect, useState } from 'react';
import { ProductInterface } from '@/interfaces/product.interface';
import axios from 'axios';
import { PREFIX } from '@/helpers/API';

const DELIVERY_FEE = 169;

export const Cart = () => {
  const [cartProducts, setCardProducts] = useState<ProductInterface[]>([]);
  const items = useSelector((s: RootState) => s.cart.items);
  const total = items.map(i => {
    const product = cartProducts.find(p => p.id === i.id);
    if (!product) {
      return 0;
    }
    return i.count * product.price;
  }).reduce((acc, i) => acc += i, 0);

  const getItem = async (id: number) => {
    const { data } = await axios.get<ProductInterface>(`${PREFIX}/products/${id}`);
    return data;
  };

  const loadAllItems = async () => {
    const res = await Promise.all(items.map(i => getItem(i.id)));
    setCardProducts(res);
  };

  useEffect(() => {
    loadAllItems();
  }, [items]);

  return <>
    <Heading className={styles['heading']}>Корзина</Heading>
    {items.map(i => {
      const product = cartProducts.find(p => p.id === i.id);
      if (!product) {
        return;
      }
      return <CartItem key={product.id} count={i.count} {...product} />;
    })}
    <div className={styles['line']}>
      <div className={styles['text']}>Итог</div>
      <div className={styles['price']}>{total}&nbsp;<span>₽</span></div>
    </div>
    <hr className={styles['hr']}/>
    <div className={styles['line']}>
      <div className={styles['text']}>Доставка</div>
      <div className={styles['price']}>{DELIVERY_FEE}&nbsp;<span>₽</span></div>
    </div>
    <hr className={styles['hr']}/>
    <div className={styles['line']}>
      <div className={styles['text']}>Итог {items.length}</div>
      <div className={styles['price']}>{total + DELIVERY_FEE}&nbsp;<span>₽</span></div>
    </div>
  </>;
};