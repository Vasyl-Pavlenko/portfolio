import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { title: '30 +', description: 'Open Source Github Projects' },
  {
    title: 'Completed ITG Program', description: 'Successfully completed the ITG Program, a comprehensive and intensive  frontend development program, within six months, mastering the entire curriculum and gaining expertise in React, Redux, Typescript, and other web development technologies.'},
  {
    title: 'Multimillion-Dollar Property Sale', description: 'Successfully negotiated and closed a deal for the sale of a luxury property, resulting in a multimillion- dollar benefit for the company.'},  
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Achievements
    </SectionTitle>

    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>
            {`${card.title}`}
          </BoxNum>

          <BoxText>
            {card.description}
          </BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
