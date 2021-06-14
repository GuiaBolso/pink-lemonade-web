import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { Close as MuiClose } from '../../icons';
import { pxToRem, hexToRgb } from '@guiabolsobr/utils';

type ModalStyleProps = {
  theme?: Theme;
  fade?: boolean;
  opened?: boolean;
  backdropMode?: boolean;
};

enum ModalConsts {
  spacingBetweenElements = 24,
  zIndex = 9999,
}

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
  z-index: ${ModalConsts.zIndex};

  @media all and (max-width: 768px) {
    ${({ backdropMode }: ModalStyleProps) =>
      backdropMode &&
      `
      align-items: flex-end;
    `}
  }
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
  max-width: ${pxToRem(600)};
  min-height: ${pxToRem(300)};
  opacity: ${({ fade }: ModalStyleProps) => (fade ? 1 : 0)};
  overflow: auto;
  padding: ${pxToRem(ModalConsts.spacingBetweenElements)};
  position: relative;
  transition: opacity 0.3s ease;
  width: 100%;

  ::-webkit-scrollbar {
    width: ${pxToRem(8)};
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }: ModalStyleProps) =>
      theme?.colors?.neutral?.light};
    border: 4px solid transparent;
    border-radius: ${pxToRem(8)};
  }

  @media all and (max-width: 768px) {
    ${({ backdropMode }: ModalStyleProps) =>
      backdropMode &&
      css`
        animation: slide 300ms ease;
        border-radius: ${pxToRem(8)} ${pxToRem(8)} 0 0;
        max-height: 80vh;
        transition: transform 210ms ease;

        @keyframes slide {
          from {
            transform: translateY(80vh);
          }

          to {
            transform: translateY(0);
          }
        }
      `}
  }
`;

export const Header = styled.header`
  color: ${({ theme }: ModalStyleProps) => theme?.colors?.neutral?.darkest};
  margin-bottom: ${pxToRem(ModalConsts.spacingBetweenElements)};
`;

export const Containt = styled.article`
  color: ${({ theme }: ModalStyleProps) => theme?.colors?.neutral?.dark};
  flex: 1;
`;

export const Footer = styled.footer`
  color: ${({ theme }: ModalStyleProps) => theme?.colors?.neutral?.dark};
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${pxToRem(ModalConsts.spacingBetweenElements)};
  justify-content: end;
  margin-top: ${pxToRem(ModalConsts.spacingBetweenElements)};
`;

export const Close = styled(MuiClose)`
  color: ${({ theme }: ModalStyleProps) => theme?.colors?.neutral?.regular};
  cursor: pointer;
  line-height: 145%;
  position: absolute;
  right: ${pxToRem(20)};
  top: ${pxToRem(20)};
`;
