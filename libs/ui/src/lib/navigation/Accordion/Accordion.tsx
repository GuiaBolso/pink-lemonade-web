import React, { useState } from 'react';

import * as Styled from './Accordion.style';

export interface AccordionProps {
  children: React.ReactNode;
  /**
   * Element that, when clicked, will open or close the panel
   */
  summary: React.ReactNode;
  /**
   * Set if panel will init onpened.
   */
  initOpened?: boolean;
}

export const Accordion = ({
  children,
  summary,
  initOpened = false,
}: AccordionProps) => {
  const [expanded, setExpanded] = useState<true | false>(initOpened);

  const handleChange = () => setExpanded(!expanded);

  return (
    <Styled.Accordion
      className="testePanel"
      expanded={expanded}
      onChange={handleChange}
    >
      <Styled.AccordionSummary
        expandIcon={<Styled.ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {summary}
      </Styled.AccordionSummary>
      <Styled.AccordionDetails>{children}</Styled.AccordionDetails>
    </Styled.Accordion>
  );
};

export default Accordion;
