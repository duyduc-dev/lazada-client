import * as React from 'react';
import request from '../utils/request';
import { CartModel } from '../interfaces/cart';
import { ResponseData } from '../interfaces/common';

interface UseCartReturn {
  amount: number;
  carts: Array<CartModel>;
}

const useCart = (): UseCartReturn => {
  const [carts, setCarts] = React.useState<CartModel[]>([]);

  const amount = React.useMemo(() => carts.reduce((acc, cart) => acc + cart.products.length, 0), [carts]);

  React.useEffect(() => {
    request
      .GET('http://localhost:8081/api/v1/cart')
      .then((res: ResponseData) => {
        if (res.statusCode === 0 && res.data) {
          setCarts(res.data);
        } else {
          setCarts([]);
        }
      })
      .catch((e) => console.log('error =>> ', e));
  }, []);

  return { carts, amount };
};

export default useCart;
