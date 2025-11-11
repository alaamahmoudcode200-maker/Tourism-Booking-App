import React from 'react';

const ResponsiveSVG = () => {
  // لتوليد معرّفات فريدة إذا استخدم المكوّن أكثر من مرة
  const idPrefix = React.useId().replace(/:/g, '');

  // دالة مساعدة لإعادة كتابة المعرّفات
  const replaceIds = (str: string) => str.replace(/(_\d+_\d+)/g, `_${idPrefix}$1`);

  return (
    <svg
      viewBox="0 0 104 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="auto"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`paint0_linear_${idPrefix}`} x1="52.2259" y1="131.566" x2="52.2259" y2="122.798" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C6C6C6" />
          <stop offset="0.1429" stopColor="#D7D7D7" />
          <stop offset="0.1708" stopColor="#E4E4E4" />
          <stop offset="0.2105" stopColor="#F0F0F0" />
          <stop offset="0.26" stopColor="#F9F9F9" />
          <stop offset="0.3294" stopColor="#FEFEFE" />
          <stop offset="0.5222" stopColor="white" />
          <stop offset="0.5642" stopColor="#FCFCFC" />
          <stop offset="0.6109" stopColor="#F2F2F2" />
          <stop offset="0.6599" stopColor="#E2E2E2" />
          <stop offset="0.7104" stopColor="#CACACA" />
          <stop offset="0.7621" stopColor="#ABABAA" />
          <stop offset="0.8141" stopColor="#828181" />
          <stop offset="0.8325" stopColor="#706F6F" />
        </linearGradient>
        <linearGradient id={`paint1_linear_${idPrefix}`} x1="-7.86773" y1="112.185" x2="-7.81201" y2="95.8371" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C6C6C6" />
          <stop offset="1" stopColor="#575756" />
        </linearGradient>
        <clipPath id={`clip0_${idPrefix}`}>
          <rect width="104" height="140" fill="white" />
        </clipPath>
        <clipPath id={`clip1_${idPrefix}`}>
          <rect width="104" height="140" fill="white" />
        </clipPath>
        <clipPath id={`clip2_${idPrefix}`}>
          <rect width="104" height="140" fill="white" />
        </clipPath>
        <mask id={`mask0_${idPrefix}`} maskUnits="userSpaceOnUse" x="0" y="0" width="104" height="140">
          <path d="M104 0H0V140H104V0Z" fill="white" />
        </mask>
        <mask id={`mask1_${idPrefix}`} maskUnits="userSpaceOnUse" x="9" y="4" width="100" height="94">
          <path d="M30.5 97.8047L109 95.8047L107.5 87L90.5 81.5L82 72.5L75.5 65L63 50L27 4L9.5 4.30469L30.5 97.8047Z" fill="#D9D9D9" />
        </mask>
      </defs>

      <g clipPath={`url(#clip0_${idPrefix})`}>
        <g clipPath={`url(#clip1_${idPrefix})`}>
          <g clipPath={`url(#clip2_${idPrefix})`}>
            <g mask={`url(#mask0_${idPrefix})`}>
              <path
                d="M137.75 94.9798C137.75 94.9798 97.1128 84.832 90.7523 81.6827C84.3917 78.5334 26.7934 4 26.7934 4L9.47852 4.34992L30.6411 97.6236L137.75 94.9798Z"
                fill="#F05423"
                stroke="#878787"
                strokeWidth="0.0664757"
              />
              <g mask={`url(#mask1_${idPrefix})`}>
                <path
                  d="M85.5 76.5L15 33L8 3H27L85.5 76.5Z"
                  fill="#FAA51B"
                />
              </g>
              <path
                d="M503.872 128.848C504.069 128.07 503.99 128.07 503.951 127.759C502.616 119.517 484.241 113.996 484.241 113.996C479.608 107.464 457.228 100.154 452.792 98.9491C445.018 96.8495 432.297 96.1497 432.297 96.1497L338.262 95.0999L276.777 95.4498L182.39 95.0999L137.866 94.75L59.0656 96.4996L41.7508 97.1995C41.7508 97.1995 23.8077 96.5774 22.3157 98.5991C20.2741 101.36 20.8238 104.82 21.8053 107.231C22.198 108.164 24.2004 108.164 24.593 108.669C25.496 109.797 24.9856 111.624 26.242 112.557C33.3486 118 45.3237 120.489 51.3309 122.394C63.3453 126.243 91.4573 134.097 114.23 138.14C124.124 139.89 133.665 141.989 148.153 143.039C158.714 143.817 184.549 144.439 192.676 144.439C200.804 144.439 266.176 145.839 266.176 145.839C266.176 145.839 320.241 145.139 325.188 144.789C330.135 144.439 434.77 145.489 439.717 145.139C444.664 144.789 472.619 143.545 489.542 138.14C500.496 134.641 503.676 129.626 503.872 128.848Z"
                fill="#F05423"
                stroke="#878787"
                strokeWidth="0.0664757"
              />
              <path
                d="M66.5002 107.406L44.2 120.34L32.839 116.785L25.0547 112.243L26.8925 108.037L66.5002 107.406Z"
                fill="#F05423"
              />
              <path
                d="M25.1818 112.201L24.318 109.246L21.2948 108.546L21.1377 103.453L27.6553 108.702L27.8517 111.346H27.1449L27.4983 112.901L27.8124 113.795L25.1818 112.201Z"
                fill="#F05423"
              />
              <path d="M69.3896 96.3438V127.759" stroke="#706F6F" strokeWidth="0.055391" />
              <path d="M118.039 108.162H38.375" stroke="#706F6F" strokeWidth="0.055391" />
              <path d="M63.8115 96.4219V126.282" stroke="#706F6F" strokeWidth="0.055391" />
              <path d="M46.8506 97.0859V121.153" stroke="#706F6F" strokeWidth="0.055391" />
              <path d="M69.4681 99.7266H63.6572" stroke="#706F6F" strokeWidth="0.055391" />
              <path d="M118.038 123.913C118.038 123.913 82.2701 122.98 63.7773 120.062" stroke="#706F6F" strokeWidth="0.055391" />
              <path d="M69.3124 114.458C66.2892 114.341 50.1522 111.62 47.4824 110.492" stroke="#706F6F" strokeWidth="0.055391" />
              <path d="M63.6563 121.963C62.7533 121.963 47.4801 117.57 46.7734 117.414" stroke="#706F6F" strokeWidth="0.055391" />
              <path
                d="M79.953 130.518L68.2135 131.568L52.1943 122.781L79.953 130.518Z"
                fill={`url(#paint0_linear_${idPrefix})`}
                stroke="#878787"
                strokeWidth="0.0664757"
              />
              <path
                d="M27.577 108.043L0.0146484 95.4453L26.1636 96.1452C26.1636 96.1452 66.8005 103.843 67.8605 104.193C68.9206 104.543 68.7636 106.993 67.3109 107.343C65.8582 107.693 27.577 108.043 27.577 108.043Z"
                fill={`url(#paint1_linear_${idPrefix})`}
                stroke="#878787"
                strokeWidth="0.0664757"
              />
              <path
                d="M21.2158 96.0312L26.2022 96.148C26.2022 96.148 66.839 103.846 67.8991 104.196C68.9592 104.546 68.8022 106.995 67.3494 107.345C66.9568 107.423 63.8158 107.54 59.4576 107.618L21.2158 96.0312Z"
                fill="#EDEDED"
                stroke="#878787"
                strokeWidth="0.0664757"
              />
              <path
                d="M96.6826 123.638L97.782 124.688H105.713L106.812 123.638V104.236L105.713 103.188H97.782L96.6826 104.236V123.638Z"
                fill="black"
                fillOpacity="0.05"
                stroke="#878787"
                strokeWidth="0.0664757"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M99.5078 112.716C99.5078 113.066 100.175 113.338 100.999 113.338H102.491C103.316 113.338 103.983 113.066 103.983 112.716C103.983 112.366 103.316 112.094 102.491 112.094H100.999C100.175 112.094 99.5078 112.366 99.5078 112.716Z"
                fill="black"
                fillOpacity="0.05"
                stroke="#878787"
                strokeWidth="0.0664757"
              />
              <path d="M101.746 109.876C101.312 109.876 100.961 109.527 100.961 109.098C100.961 108.668 101.312 108.32 101.746 108.32C102.18 108.32 102.531 108.668 102.531 109.098C102.531 109.527 102.18 109.876 101.746 109.876Z" stroke="#878787" strokeWidth="0.0664757" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.60383 96.4956L23.5308 96.7678L21.1358 95.9902L0.0517578 95.5625L2.60383 96.4956Z"
                stroke="#706F6F"
                strokeWidth="0.0664757"
              />
              <path d="M39.5936 107.733L3.43262 95.7969" stroke="#575756" strokeWidth="0.055391" />
              <path d="M57.6885 102.25C59.1805 102.561 58.8271 106.838 57.6885 106.993" stroke="#706F6F" strokeWidth="0.055391" />
              <path d="M43.3994 99.4872C44.538 99.1761 44.8913 102.909 43.3994 102.636" stroke="#706F6F" strokeWidth="0.055391" />
              <path d="M29.6611 96.8438C30.4071 96.9214 30.6426 98.3989 29.6611 98.3989" stroke="#706F6F" strokeWidth="0.055391" />
              <path d="M73.2788 112.824C73.0186 112.824 72.8077 112.615 72.8077 112.357C72.8077 112.1 73.0186 111.891 73.2788 111.891C73.5391 111.891 73.75 112.1 73.75 112.357C73.75 112.615 73.5391 112.824 73.2788 112.824Z" fill="#575756" />
              <path d="M73.2788 106.644C73.0186 106.644 72.8077 106.435 72.8077 106.178C72.8077 105.92 73.0186 105.711 73.2788 105.711C73.5391 105.711 73.75 105.92 73.75 106.178C73.75 106.435 73.5391 106.644 73.2788 106.644Z" fill="#575756" />
              <path d="M73.2788 104.894C73.0186 104.894 72.8077 104.685 72.8077 104.428C72.8077 104.17 73.0186 103.961 73.2788 103.961C73.5391 103.961 73.75 104.17 73.75 104.428C73.75 104.685 73.5391 104.894 73.2788 104.894Z" fill="#575756" />
              <path d="M87.9629 120.443H92.2032" stroke="#575756" strokeWidth="0.11079" />
              <path d="M26.2051 5.94531L88.0046 83.4336L108.5 86.9717" stroke="#706F6F" strokeWidth="0.055391" />
              <path d="M92.9131 82.5V95.5638" stroke="#706F6F" strokeWidth="0.055391" />
              <path d="M88.1553 86.1172V95.7206" stroke="#706F6F" strokeWidth="0.055391" />
              <path d="M16.4238 5.98419L46.7346 97.3139L87.9997 86.3108L24.3549 5.94531" stroke="#706F6F" strokeWidth="0.055391" />
              <path d="M88.123 86.0781H93.1486" stroke="#706F6F" strokeWidth="0.055391" />
              <path d="M88.2344 91.8672H92.8674" stroke="#706F6F" strokeWidth="0.055391" />
              <path d="M20.8662 5.75L56.3204 96.5743" stroke="#706F6F" strokeWidth="0.055391" />
              <path d="M28.2419 5.47656L9.90625 6.02089" stroke="#706F6F" strokeWidth="0.0664757" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ResponsiveSVG;