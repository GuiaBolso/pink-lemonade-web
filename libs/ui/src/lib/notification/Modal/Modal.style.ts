import styled from '@emotion/styled';
import { Close as MuiClose } from '@material-ui/icons';
import { pxToRem, hexToRgb } from '@guiabolsobr/utils';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type ModalStyleProps = {
  theme: CustomThemeProps;
  fade?: boolean;
  opened?: boolean;
};

const SPACING_ELEMENT = 24;

export const Backdrop = styled.div`
  align-items: center;
  background-color: ${({ theme }: ModalStyleProps) => {
    const overlayColor = hexToRgb(theme?.colors?.neutral?.darkest);
    return `rgba(${overlayColor.r}, ${overlayColor.g}, ${overlayColor.b}, 0.22)`;
  }};
  display: ${({ opened }: ModalStyleProps) => (opened ? 'flex' : 'none')};
  height: 100vh;
  justify-content: center;
  left: 0;
  max-width: 100%;
  opacity: ${({ fade }: ModalStyleProps) => (fade ? 1 : 0)};
  position: fixed;
  top: 0;
  transition: opacity 0.3s ease;
  width: 100vw;
`;

export const Container = styled.section`
  background-color: ${({ theme }: ModalStyleProps) =>
    theme?.colors?.neutral?.blank};
  box-shadow: 0px 8px 10px rgba(13, 13, 13, 0.14),
    0px 0px 2px rgba(13, 13, 13, 0.2);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 100vh;
  max-width: 600px;
  min-height: 300px;
  opacity: ${({ fade }: ModalStyleProps) => (fade ? 1 : 0)};
  overflow: auto;
  padding: ${pxToRem(SPACING_ELEMENT)};
  position: relative;
  transition: opacity 0.3s ease;
  width: 100%;
`;

export const Header = styled.header`
  color: ${({ theme }: ModalStyleProps) => theme?.colors?.neutral?.darkest};
  margin-bottom: ${pxToRem(SPACING_ELEMENT)};
`;

export const Containt = styled.article`
  color: ${({ theme }: ModalStyleProps) => theme?.colors?.neutral?.darker};
  flex: 1;
`;

export const Footer = styled.footer`
  color: ${({ theme }: ModalStyleProps) => theme?.colors?.neutral?.darker};
  display: grid;
  grid-auto-flow: column;
  grid-gap: 25px;
  justify-content: end;
  margin-top: ${pxToRem(SPACING_ELEMENT)};
`;

export const Close = styled(MuiClose)`
  color: ${({ theme }: ModalStyleProps) => theme?.colors?.neutral?.regular};
  cursor: pointer;
  line-height: 145%;
  position: absolute;
  right: 20px;
  top: 20px;
`;
