import Image from 'next/image';
import * as React from 'react';
import logo from '~/assets/images/loho-no-text.png';
import item from '~/assets/images/item.png';
import momo from '~/assets/images/logo-momo.png';
import zaloPay from '~/assets/images/logo-zalo-pay.png';

import lazada from '~/assets/images/DeliveryServices/lazada-logistic.png';
import ghn from '~/assets/images/DeliveryServices/ghn.png';
import ninja from '~/assets/images/DeliveryServices/ninja.png';
import ship60 from '~/assets/images/DeliveryServices/ship60.png';
import bestExpress from '~/assets/images/DeliveryServices/express.png';
import ahamove from '~/assets/images/DeliveryServices/ahamove.png';
import jtExpress from '~/assets/images/DeliveryServices/jtExpress.png';

import bsi from '~/assets/images/bsi.png';
import noProductFake from '~/assets/images/noProductFake.png';
import pci_dss from '~/assets/images/pci_dss.png';

import boCongThuongDK from '~/assets/boCongThuongDK.png';
import boCongThuongTB from '~/assets/boCongThuongTB.png';

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  const {} = props;

  return (
    <footer>
      <div className="pb-10 bg-cultured_2">
        <div className="flex justify-between mx-auto max-w-screen-custom_lg">
          <div className="pt-5">
            <h4 className="text-dark_imperial_blue text-[16px] mb-2">CONTACT US</h4>
            <ul className="text-[12px] text-dark_imperial_blue">
              <li>Hotline & Online chat (24/7)</li>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Shipping & Delivery</li>
              <li>International Product Policy</li>
              <li>How to Return</li>
            </ul>
          </div>
          <div className="pt-5">
            <h4 className="text-dark_imperial_blue text-[16px] mb-2">LAZADA VIETNAM</h4>
            <ul className="text-[12px] text-dark_imperial_blue">
              <li>All Categories</li>
              <li>About Lazada</li>
              <li>Sell on Lazada</li>
              <li>Afﬁliate Program</li>
              <li>Careers</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Press & Media</li>
              <li>Intellectual Property Protection</li>
              <li>Operating Regulation</li>
              <li>Procedure of claim and dispute handlin</li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image src={logo.src} alt="" width={42} height={42} />
            </div>
            <div>
              <p className="text-chinese_orange">Go where your heart beats</p>
              <p className="text-[14px]">Download the App</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <div
                style={{
                  backgroundImage: `url(${item.src})`,
                }}
                className="w-[126px] h-[42px] bg-[-190px_-124px]"
              ></div>
            </div>

            <div>
              <div
                style={{
                  backgroundImage: `url(${item.src})`,
                }}
                className="w-[126px] h-[42px] bg-[-568px_-374px]"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 mx-auto max-w-screen-custom_lg">
        <div className="flex gap-3">
          <div>
            <p className="mb-4 text-yankees_blue">Payment Methods</p>
            <div className="flex flex-wrap gap-5">
              <div
                className="w-[53px] h-[39px]"
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-768px -768px',
                }}
              ></div>
              <div
                className="w-[53px] h-[39px]"
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-329px -768px',
                }}
              ></div>
              <div
                className="w-[53px] h-[39px]"
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-282px -828px',
                }}
              ></div>
              <div
                className="w-[53px] h-[39px]"
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-209px -829px',
                }}
              ></div>
              <div
                className="w-[53px] h-[39px]"
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-574px -830px',
                }}
              ></div>
              <div
                className="w-[53px] h-[39px]"
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-938px -527px',
                  width: 32,
                }}
              ></div>

              <div
                className="w-[53px] h-[39px]"
                style={{
                  backgroundImage: `url(${momo.src})`,
                  backgroundPosition: '50% 50%',
                  width: 40,
                  height: 40,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <div
                className="w-[53px] h-[39px]"
                style={{
                  backgroundImage: `url(${zaloPay.src})`,
                  backgroundPosition: '50% 50%',
                  width: 40,
                  height: 40,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </div>
          </div>
          <div>
            <p className="text-yankees_blue">Delivery Services</p>
            <div className="flex flex-wrap">
              <Image src={lazada.src} alt="" width={96} height={70} />
              <Image src={ghn.src} alt="" width={96} height={70} />
              <Image src={ninja.src} alt="" width={96} height={70} />
              <Image src={ship60.src} alt="" width={96} height={70} />
              <Image src={bestExpress.src} alt="" width={96} height={70} />
              <Image src={ahamove.src} alt="" width={96} height={70} />
              <Image src={jtExpress.src} alt="" width={96} height={70} />
            </div>
          </div>
          <div>
            <p className="text-yankees_blue">Verified by</p>
            <div className="flex gap-2 mt-2">
              <div className="flex flex-col gap-2">
                <Image src={pci_dss.src} alt="" height={60} width={92} />
                <Image src={noProductFake.src} alt="" height={80} width={80} />
                <Image src={bsi.src} alt="" height={42} width={80} />
              </div>
              <div className="flex flex-col gap-2">
                <Image src={boCongThuongDK.src} alt="" width={100} height={40} />
                <Image src={boCongThuongTB.src} alt="" width={100} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 mx-auto max-w-screen-custom_lg">
        <div className="flex justify-between">
          <div>
            <p>Lazada Southeast Asia</p>
            <div className="flex gap-1 mt-2 flex-wap">
              <div
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-893px -710px',
                  width: 34,
                  height: 34,
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-723px -710px',
                  width: 34,
                  height: 34,
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-852px -710px',
                  width: 34,
                  height: 34,
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-934px -710px',
                  width: 34,
                  height: 34,
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-544px -710px',
                  width: 34,
                  height: 34,
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-634px -710px',
                  width: 34,
                  height: 34,
                }}
              ></div>
            </div>
          </div>
          <div>
            <p>Follow Us</p>
            <div className="flex gap-1 mt-2 flex-wap">
              <div
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-767px -672px',
                  width: 34,
                  height: 34,
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-812px -624px',
                  width: 34,
                  height: 34,
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-767px -624px',
                  width: 34,
                  height: 34,
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-852px -671px',
                  width: 34,
                  height: 34,
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-812px -671px',
                  width: 34,
                  height: 34,
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundPosition: '-721px -624px',
                  width: 34,
                  height: 34,
                }}
              ></div>
            </div>
          </div>
          <div>© Lazada 2023</div>
        </div>
      </div>
    </footer>
  );
};

bsi;
noProductFake;
pci_dss;
export default Footer;
