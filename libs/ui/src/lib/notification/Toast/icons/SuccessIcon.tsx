import React from 'react';

const SuccessIcon = props => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx={12} cy={12} r={10} stroke="#fff" strokeWidth={2} />
    <path
      d="M17 8.71l-6.875 7L7 12.527"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SuccessIcon;
