import React, { useState } from 'react';

import * as Styled from './Accordion.style';

export interface AccordionProps {
  children: React.ReactNode;
  /**
   * Element that, when clicked, will open or close the panel
   */
  summary: React.ReactNode;
  /**
   * Set if panel will init opened.
   */
  initOpened?: boolean;
  panel?: string;
  whoIsExpanded?: boolean | string;
  setWhoIsExpanded?: (value: boolean | string) => void;
  singleExpand?: boolean;
}

export const Accordion = ({
  children,
  summary,
  initOpened = false,
  panel = 'panel',
  singleExpand,
  whoIsExpanded,
  setWhoIsExpanded,
  ...rest
}: AccordionProps) => {
  const [expanded, setExpanded] = useState<true | false>(initOpened);

  const handleChange = (panel?: string) => (
    event: React.ChangeEvent<unknown>,
    isExpanded: boolean,
  ) => {
    if (singleExpand) {
      setWhoIsExpanded(isExpanded ? panel : false);
    } else {
      setExpanded(!expanded);
    }
  };

  return (
    <Styled.Accordion
      className="testePanel"
      expanded={singleExpand ? whoIsExpanded === panel : expanded}
      onChange={handleChange(singleExpand ? panel : null)}
      {...rest}
    >
      <Styled.AccordionSummary
        expandIcon={<Styled.ExpandMoreIcon />}
        aria-controls={`${panel}-content`}
        id={`${panel}-header`}
      >
        {summary}
      </Styled.AccordionSummary>
      <Styled.AccordionDetails>{children}</Styled.AccordionDetails>
    </Styled.Accordion>
  );
};

export default Accordion;
