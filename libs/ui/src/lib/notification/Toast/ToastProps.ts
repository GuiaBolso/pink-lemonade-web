export type ToastTypeProps = 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR';

export type ToastMessageProps = {
  id: string;
  type?: ToastTypeProps;
  title: string;
  description?: string;
};

export type ToastContainerProps = {
  messages: ToastMessageProps[];
};

export type ToastProps = {
  message: ToastMessageProps;
};
