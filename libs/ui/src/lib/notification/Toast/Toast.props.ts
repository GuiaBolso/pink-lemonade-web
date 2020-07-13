export type ToastTypeProps = 'SUCCESS' | 'ALERT' | 'ERROR' | 'NOTIFICATION';

export type ToastMessageProps = {
  id: string;
  title: string;
  description?: string;
  type?: ToastTypeProps;
  noIcon?: boolean;
  autoClose?: boolean;
  timeToClose?: number;
};

export type ToastContainerProps = {
  messages: ToastMessageProps[];
};
