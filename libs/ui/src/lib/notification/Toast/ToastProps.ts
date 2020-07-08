export type ToastTypeProps = 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR';

export type ToastMessageProps = {
  id: string;
  type?: ToastTypeProps;
  title: string;
  description?: string;
  autoClose?: boolean;
  timeToClose?: number;
};

export type ToastContainerProps = {
  messages: ToastMessageProps[];
};

export type ToastProps = {
  message: ToastMessageProps;
};
