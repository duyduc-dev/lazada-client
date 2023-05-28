import { useIsomorphicLayoutEffect } from 'hooks-react-custom';
import { BsTrash } from 'react-icons/bs';
import { useState } from 'react';
import MainLayout from '~/src/components/layouts/MainLayout';
import WrapCart from '~/src/components/Cart/WrapCart';
import { useAuth } from '~/src/context/AuthContext';
import useCart from '~/src/hooks/useCart';
import CartProduct from '~/src/components/Cart/CartProduct';
import OrderSummary from '~/src/components/Cart/OrderSummary';

const Cart = () => {
  const { handleRedirectLogin, currentUser } = useAuth();
  const { carts } = useCart();
  const [productSelected, setProductSelected] = useState<string[]>([]);
  console.log('product selected >> ', productSelected);

  useIsomorphicLayoutEffect(() => {
    if (!currentUser) {
      handleRedirectLogin();
    }
  }, [currentUser]);

  return (
    <div className="min-h-[675px] bg-cultured pb-20">
      <div className="container w-[1188px] m-auto mx-20px flex justify-center text-red">
        <div className="box-border">
          <div className=" container flex justify-center mt-[12px]">
            <div className="container w-[788px]">
              <div className="py-4 rounded-md mb-[12px] flex bg-white">
                <div className="flex w-full">
                  <div className="px-[12px]">
                    <label>
                      <input className="scale-125 border-[12px] outline-none" type="checkbox" />
                      <span className="select-none ml-[30px] text-[12px] text-sonic_silver">SELECT ALL</span>
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="flex justify-center mt-[4px] text-[16px] text-sonic_silver">
                    <BsTrash />
                    <span className="mr-2 ml-[5px] text-[12px] text-sonic_silver bottom-[1px] relative">DELETE</span>
                  </div>
                </div>
              </div>
              <div>
                {carts.map((cart, i) => (
                  <WrapCart seller={cart.seller} key={`${i}-${cart.seller.id}`}>
                    {cart.products.map((product, i) => (
                      <CartProduct key={`${i}-${product.title}`} product={product} selectProduct={setProductSelected} />
                    ))}
                  </WrapCart>
                ))}
              </div>
            </div>

            <div className="w-[388px]">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.Layout = MainLayout;
export default Cart;
