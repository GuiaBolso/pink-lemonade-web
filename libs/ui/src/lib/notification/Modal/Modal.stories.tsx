import React from 'react';

import { ModalProvider, useModal } from '.';

export default {
  title: 'Notification/Modal',
  decorators: [(story: () => any) => <ModalProvider>{story()}</ModalProvider>],
};

export const Base = () => {
  const ModalContent = () => {
    const { addModal } = useModal();
    return (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          lacus est. Aenean viverra quis lectus a euismod. Praesent porta magna
          nec ante accumsan, ut porta lectus ultricies. Morbi aliquet
          ullamcorper ornare. Aenean at gravida nibh, rutrum vulputate nunc.
          Praesent blandit dui erat. Nullam nec suscipit metus. Duis a arcu
          venenatis, blandit risus et, volutpat tellus. In eros mauris, ultrices
          ac arcu ut, tincidunt vehicula neque. Ut nec consectetur nisl. Integer
          ac eleifend est, id bibendum leo. In nulla urna, maximus in mauris id,
          lacinia ultrices dui. Nunc sed turpis enim.
        </p>
        <p>
          Phasellus eu eros quis metus lacinia convallis at in tellus. Donec
          volutpat sodales mauris vel scelerisque. Curabitur ut ante in nibh
          facilisis pharetra sed in urna. Maecenas sit amet nisi sapien. Quisque
          ut mauris sed nisl pulvinar lobortis. Donec mollis purus in facilisis
          volutpat. Morbi vulputate, lectus sit amet vulputate lacinia, magna
          nisl volutpat urna, vitae interdum tortor dui vel ligula. Etiam nec
          diam eget ipsum faucibus accumsan. Fusce semper vitae dolor quis
          tincidunt. Cras molestie et justo eu finibus. Cras interdum orci vitae
          tincidunt eleifend.
        </p>
        <button
          onClick={() => {
            addModal({
              title: 'Teste de modal',
              content: <ModalContent />,
            });
          }}
        >
          Clique aqui
        </button>
      </>
    );
  };
  const ActionButtonModal = () => {
    const { addModal, addAlert, addDialog, modals } = useModal();

    console.log('modals', modals);

    const fechou = () => console.log('fechou');

    return (
      <>
        <button
          onClick={() => {
            addModal({
              title: 'Teste de modal',
              content: <ModalContent />,
            });
          }}
        >
          Modal
        </button>
        <button
          onClick={() => {
            addAlert({
              title: 'Teste de modal',
              content: <ModalContent />,
              confirm: {
                label: 'Fechar',
                handler: fechou,
              },
            });
          }}
        >
          Alert
        </button>
        <button
          onClick={() => {
            addDialog({
              title: 'Teste de modal',
              content: <ModalContent />,
            });
          }}
        >
          Dialog
        </button>
      </>
    );
  };

  return <ActionButtonModal />;
};
