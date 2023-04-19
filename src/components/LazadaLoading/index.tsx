import * as React from 'react';
import Popup from '../Popup';

interface LazadaLoadingProps {
  visible?: boolean;
}

const LazadaLoading: React.FC<LazadaLoadingProps> = (props) => {
  const { visible = false } = props;

  return (
    <Popup visible={visible}>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-[9999]">
        <svg width="100" height="100" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
          {/* <style>.st0{fill:#f57224}.st1{fill:#fff}.st2{fill:url(#Page-1_2_)}</style> */}
          <g id="Page-1_1_">
            <g id="_x38_0x80-loading-logo">
              <circle id="Oval" style={{ fill: '#f57224' }} className="st0" cx="40" cy="40" r="40"></circle>
              <g id="Group" transform="translate(25 31)">
                <path
                  id="Fill-2"
                  style={{ fill: '#fff' }}
                  className="st1"
                  d="M24.1 10.7c-.6-.4-1.3-.7-2-.9L17.8 0h-1.4L8.7 17h1.4l1.8-4.2.3-.6c1.5-1.2 3.5-1.8 5.6-1.8 2 0 4 .3 5.6 1.4l.7-1.1zm-3.5-1.3c-.9-.2-1.8-.3-2.8-.2-1.6 0-3.2.4-4.7 1l.1-.2L17 1.3l3.6 8.1z"
                ></path>
                <path
                  id="Fill-3"
                  style={{ fill: '#fff' }}
                  className="st1"
                  d="M19.8 0l.5 1.2h8.9l-9.3 15 .4.8h9.4l.6-1.3h-8.6l9.2-14.6V0H19.8"
                ></path>
                <path id="Fill-4" style={{ fill: '#fff' }} className="st1" d="M0 0v17h7.9l.6-1.2H1.3V0H0"></path>
              </g>
              <g id="lzd_app_ico-copy-2" transform="translate(3.857 3.857)">
                <linearGradient
                  id="Page-1_2_"
                  gradientUnits="userSpaceOnUse"
                  x1="-265.221"
                  y1="427.879"
                  x2="-264.255"
                  y2="427.583"
                  gradientTransform="matrix(72 0 0 -72 19092.857 30831.428)"
                >
                  <stop offset="0" stop-color="#fff" stop-opacity="0"></stop>
                  <stop offset=".476" stop-color="#fff" stop-opacity="0"></stop>
                  <stop offset=".659" stop-color="#fff" stop-opacity=".547"></stop>
                  <stop offset="1" stop-color="#fefefe"></stop>
                </linearGradient>
                <path
                  id="lzd-loader-spinner"
                  style={{ fill: 'url(#Page-1_2_)' }}
                  className="st2"
                  d="M.1 36.1c0 19.9 16.1 36 36 36s36-16.1 36-36S56 .1 36.1.1C16.3.1.1 16.3.1 36.1zm36-34c18.8 0 34 15.2 34 34s-15.2 34-34 34-34-15.2-34-34c0-18.7 15.3-34 34-34z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </Popup>
  );
};

export default LazadaLoading;
