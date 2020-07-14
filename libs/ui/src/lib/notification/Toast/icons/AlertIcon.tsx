import React from 'react';

const AlertIcon = props => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      clipRule="evenodd"
      d="M10.29 3.963l-8.47 14.14a2 2 0 001.71 3h16.94a2 2 0 001.71-3l-8.47-14.14a2 2 0 00-3.42 0z"
      stroke="#404040"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 9.103v4"
      stroke="#404040"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={12} cy={17.103} r={0.5} fill="#fff" stroke="#404040" />
  </svg>
);

export default AlertIcon;
