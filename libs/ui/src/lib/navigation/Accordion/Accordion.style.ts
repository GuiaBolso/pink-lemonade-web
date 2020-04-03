import styled from '@emotion/styled';

import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MuiExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type AccordionStyledProps = {
  theme: CustomThemeProps;
};

export const ExpansionPanel = styled(MuiExpansionPanel)`
  &.MuiExpansionPanel-root {
    &::before {
      background-color: ${({ theme }: AccordionStyledProps) =>
        theme?.colors?.neutral?.lightest};
    }

    &:first-of-type {
      .MuiExpansionPanelSummary-content {
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

      + .MuiExpansionPanel-root::before {
        display: block;
      }
    }
  }
`;

export const ExpansionPanelSummary = styled(MuiExpansionPanelSummary)`
  &.MuiExpansionPanelSummary-root {
    align-items: flex-end;
    padding: 0;

    &.Mui-expanded {
      min-height: inherit;
    }
  }

  .MuiExpansionPanelSummary-content {
    margin: 40px 0 20px 0;

    &.Mui-expanded {
      margin: 40px 0 20px 0;
    }
  }
`;

export const ExpansionPanelDetails = styled(MuiExpansionPanelDetails)`
  &.MuiExpansionPanelDetails-root {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ExpandMoreIcon = styled(MuiExpandMoreIcon)`
  color: ${({ theme }: AccordionStyledProps) =>
    theme?.colors?.brand?.tertiary?.default};
`;
