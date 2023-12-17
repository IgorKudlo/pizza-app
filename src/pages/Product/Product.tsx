import { useParams } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { Product as ProductInterface } from '@/interfaces/product';
import { useCallback, useEffect, useState } from 'react';
import { PREFIX } from '@/helpers/API';

export const Product = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [product, setProduct] = useState<ProductInterface>();

  const getProduct = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<ProductInterface>(`${PREFIX}/products/${id}`);
      setProduct(data);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (<>
    <div>Product</div>
    {isLoading && <>Загружаем продукт...</>}
    {error && <>{error}</>}
    {product && <>ID: {product.id}, {product.name}</>}
  </>);
};
