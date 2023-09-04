import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />

    <SectionTitle main>
      Projects
    </SectionTitle>

    <GridContainer>
      {projects.map(({ id, title, description, image, tags, visit, source }) => {
        return (
          <BlogCard key={id}>
            <Img src={image} />

            <TitleContent>
              <HeaderThree title>
                {title}
              </HeaderThree>

              <Hr />
            </TitleContent>

            <CardInfo className="card-info">
              {description}
            </CardInfo>

            <div>
              <TitleContent>
                Stack
              </TitleContent>

              <TagList>
                {tags.map((tag, index) => {
                  return <Tag key={index}>
                    {tag}
                  </Tag>;
                })}
              </TagList>
            </div>

            <UtilityList>
              <ExternalLinks href={source}>
                Code
              </ExternalLinks>

              <ExternalLinks href={visit}>
                Demo
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;