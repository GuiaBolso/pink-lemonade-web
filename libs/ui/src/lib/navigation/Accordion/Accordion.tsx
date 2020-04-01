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
   * Default: false.
   */
  initOpened?: boolean;
}

export const Accordion = ({
  children,
  summary,
  initOpened = false,
}: AccordionProps) => {
  const [expanded, setExpanded] = useState<true | false>(initOpened);

  const handleChange = () => {
    setExpanded(!expanded);
  };
  return (
    <Styled.ExpansionPanel
      className="testePanel"
      expanded={expanded}
      onChange={handleChange}
    >
      <Styled.ExpansionPanelSummary
        expandIcon={<Styled.ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <span>{summary}</span>
      </Styled.ExpansionPanelSummary>
      <Styled.ExpansionPanelDetails>{children}</Styled.ExpansionPanelDetails>
    </Styled.ExpansionPanel>
  );
};

export default Accordion;
