import styled from '@emotion/styled';
import { Close as MuiClose } from '@material-ui/icons';
import { pxToRem, hexToRgb } from '@guiabolsobr/utils';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type ModalStyleProps = {
  theme: CustomThemeProps;
  fade?: boolean;
};

export const Overlay = styled.div`
  align-items: center;
  background-color: ${({ theme }: ModalStyleProps) => {
    const overlayColor = hexToRgb(theme?.colors?.neutral?.darkest);
    return `rgba(${overlayColor.r}, ${overlayColor.g}, ${overlayColor.b}, 0.22)`;
  }};
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  opacity: ${({ fade }: ModalStyleProps) => (fade ? 1 : 0)};
  position: fixed;
  top: 0;
  width: 100vw;
`;

export const Container = styled.section`
  background-color: ${({ theme }: ModalStyleProps) =>
    theme?.colors?.neutral?.blank};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  opacity: ${({ fade }: ModalStyleProps) => (fade ? 1 : 0)};
  padding: ${pxToRem(24)};
  position: relative;
  transition: opacity 0.3s ease;
  width: 600px;
`;

export const Header = styled.header`
  color: ${({ theme }: ModalStyleProps) => theme?.colors?.neutral?.darkest};
`;

export const Containt = styled.article`
  color: ${({ theme }: ModalStyleProps) => theme?.colors?.neutral?.darker};
`;

export const Footer = styled.footer`
  color: ${({ theme }: ModalStyleProps) => theme?.colors?.neutral?.darker};
`;

export const Close = styled(MuiClose)`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
`;
