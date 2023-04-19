import Input from '../auth/FormLogin/Input';

interface OrderSummaryProps {}
export default function OrderSummary(props: OrderSummaryProps) {
  return (
    <div className="ml-3">
      <div className="bg-white pt-[16px] px-[12px] ">
        <div className=" mb-4 text-[18px] text-raisin_black font-light">Order Summary</div>
        <div>
          <div className="mb-[15px] flex justify-between text-sonic_silver_2 text-[14px] font-light">
            <div>Subtotal ( 0 items)</div>
            <div>
              <span>$0.00</span>
            </div>
          </div>
          <div className="mb-[15px] flex justify-between text-sonic_silver_2 text-[14px] font-light ">
            <div>Shipping Fee</div>
            <div>
              <span>$0.00</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-[14px] font-light text-raisin_black">
          <div>Total</div>
          <div className="relative text-right ">
            <div className="text-[18px] text-vivid_tangelo font-medium">$0.00</div>
            <div className="text-[12px] text-title_arsenic ">GST included, where applicable</div>
          </div>
        </div>
        <button
          type="button"
          className=" mt-[40px] mb-5 text-white w-full h-[40px] bg-vivid_tangelo font-light hover:bg-orange-600"
        >
          PROCEED TO CHECKOUT(0)
        </button>
      </div>
    </div>
  );
}
