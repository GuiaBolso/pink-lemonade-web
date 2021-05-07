import styled from '@emotion/styled';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { ExpandMore } from '../../icons';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type AccordionStyledProps = {
  theme: CustomThemeProps;
};

export const Accordion = styled(MuiAccordion)`
  &.MuiAccordion-root {
    &::before {
      background-color: ${({ theme }: AccordionStyledProps) =>
        theme?.colors?.neutral?.lightest};
    }

    &:first-of-type {
      .MuiAccordionSummary-content {
        margin: 20px 0;

        &.Mui-expanded {
          margin: 20px 0;
        }
      }
    }

    &.MuiPaper-elevation1 {
      background-color: transparent;
      box-shadow: none;
    }

    &.Mui-expanded {
      margin: 0;

      &::before {
        opacity: 1;
      }

      + .MuiAccordion-root::before {
        display: block;
      }
    }
  }
`;

export const AccordionSummary = styled(MuiAccordionSummary)`
  &.MuiAccordionSummary-root {
    align-items: flex-end;
    padding: 0;

    &.Mui-expanded {
      min-height: inherit;
    }
  }

  .MuiAccordionSummary-content {
    margin: 40px 0 20px 0;

    &.Mui-expanded {
      margin: 40px 0 20px 0;
    }
  }
`;

export const AccordionDetails = styled(MuiAccordionDetails)`
  &.MuiAccordionDetails-root {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ExpandMoreIcon = styled(ExpandMore)`
  color: ${({ theme }: AccordionStyledProps) =>
    theme?.colors?.brand?.tertiary?.default};
`;
