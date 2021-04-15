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
}

export const Accordion = ({
  children,
  summary,
  initOpened = false,
  panel,
}: AccordionProps) => {
  // const [expanded, setExpanded] = useState<true | false>(initOpened);
  const [expanded, setExpanded] = useState<string | false>(false);

  // const handleChange = () => setExpanded(!expanded);

  const handleAccordionChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
    console.log('expanded?', expanded, '| panel = ', panel);
  };

  return (
    <Styled.Accordion
      className="testePanel"
      expanded={expanded === panel}
      onChange={handleAccordionChange(panel)}
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
