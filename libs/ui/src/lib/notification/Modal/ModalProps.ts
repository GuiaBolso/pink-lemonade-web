export type ModalTypesProps = 'dialog' | 'alert' | 'blank';

export type ModalProps = {
  id?: string;
  type: ModalTypesProps;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  disableBackdropClick?: boolean;
  opened?: boolean;
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
  'confirm' | 'dismiss' | 'type' | 'children' | 'opened'
> & { content: React.ReactNode };
export type AlertProps = Omit<
  ModalProps,
  'dismiss' | 'type' | 'children' | 'opened'
> & {
  content: React.ReactNode;
};
export type DialogProps = Omit<ModalProps, 'type' | 'children' | 'opened'> & {
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

export type HandleModalProps = (DialogProps | AlertProps | BlankModalProps) & {
  type: ModalTypesProps;
};
