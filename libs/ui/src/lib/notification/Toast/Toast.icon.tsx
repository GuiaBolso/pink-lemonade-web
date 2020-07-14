import React from 'react';

import { ToastMessageProps } from './Toast.props';
import { AlertIcon, ErrorIcon, NotificationIcon, SuccessIcon } from './icons';

const toastIcons = {
  SUCCESS: <SuccessIcon />,
  ALERT: <AlertIcon />,
  ERROR: <ErrorIcon />,
  NOTIFICATION: <NotificationIcon />,
};

const Icon = ({ type = 'NOTIFICATION' }: Pick<ToastMessageProps, 'type'>) => {
  return <>{toastIcons[type]}</>;
};

export default Icon;
