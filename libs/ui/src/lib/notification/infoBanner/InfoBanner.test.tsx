import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import InfoBanner, { InfoBannerProps } from './InfoBanner';

const makerSut = (overwriteProps = {}) => {
  const defaultProps: InfoBannerProps = {
    children: <p>Mensagem legal</p>,
    type: 'base',
    confirm: {
      label: 'Confirmar',
      handler: jest.fn(),
    },
    opened: true,
    position: 'bottom',
  };

  const sut = render(<InfoBanner {...defaultProps} {...overwriteProps} />);

  return { defaultProps, sut };
};

describe('InfoBanner Component', () => {
  it('Should call confirm handler', () => {
    const { sut, defaultProps } = makerSut();

    const confirmButton = sut.getByText(defaultProps.confirm.label);

    fireEvent.click(confirmButton);

    expect(defaultProps.confirm.handler).toHaveBeenCalledTimes(1);
  });

  it('Should render children', () => {
    const { sut } = makerSut();

    expect(sut.getByText('Mensagem legal')).toBeInTheDocument();
  });
});
