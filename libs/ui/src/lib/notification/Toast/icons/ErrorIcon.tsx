import React from 'react';

const ErrorIcon = props => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      clipRule="evenodd"
      d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2v0z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12h8"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ErrorIcon;
