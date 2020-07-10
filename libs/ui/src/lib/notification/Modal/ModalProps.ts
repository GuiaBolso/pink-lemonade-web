export type ModalProps = {
  id?: string;
  type: 'dialog' | 'alert' | 'blank';
  title: string;
  children: React.ReactNode;
  confirm?: {
    label: string;
    handler?: () => void;
  };
  dismiss?: {
    label: string;
    handler?: () => void;
  };
};

export type BlankModalProps = Omit<
  ModalProps,
  'confirm' | 'dismiss' | 'type' | 'children'
> & { content: React.ReactNode };
export type AlertProps = Omit<ModalProps, 'dismiss' | 'type' | 'children'> & {
  content: React.ReactNode;
};
export type DialogProps = Omit<ModalProps, 'type' | 'children'> & {
  content: React.ReactNode;
};

export type ModalContainerProps = {
  modals: ModalProps[];
};

export type ModalContextProps = ModalContainerProps & {
  addModal(modal: BlankModalProps): void;
  addDialog(modal: DialogProps): void;
  addAlert(modal: AlertProps): void;
  removeModal(id: string): void;
};

export type ModalProviderProps = {
  children: React.ReactNode;
};
