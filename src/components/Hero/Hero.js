import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle
          main
          center
        >
          Welcome To

          <br />

          My Personal Portfolio
        </SectionTitle>

        <SectionText>
          Experienced Frontend Developer specializing in React applications, with a diverse background in law, sales, and customer service, bringing a unique perspective to IT projects.
        </SectionText>
        
        <Link
          href="https://drive.google.com/file/d/108YAsy6Tg71lV6Atg1zYTcbsc4rZwS9L/view?usp=sharing"
          target="_blank"
        >
          <Button>
            Learn More
          </Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;