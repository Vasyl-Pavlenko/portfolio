import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
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
          Experienced Frontend Developer with a diverse background in law, sales, and customer service, offering a unique perspective to React applications and IT projects.
        </SectionText>
        
        <Link
          href="https://drive.google.com/file/d/1Q4szSROavKWttGMQ745EqMn1wBw6ERE2/view?usp=sharing"
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