import { useEffect, useState } from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  Loader,
  ShowMoreButton
} from './ProjectsStyles';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const initialProjectsToShow = 4;
const projectsToAdd = 4;

const Projects = () => {
  const [projectsToShow, setProjectsToShow] = useState(initialProjectsToShow);
  const [isLoading, setIsloading] = useState(false);

  const handleShowMore = () => {
    setProjectsToShow(projectsToShow + projectsToAdd);
  };

  const projectsToDisplay = projects.slice(0, projectsToShow);

  useEffect(() => {
    setIsloading(true); 
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  }, [projectsToShow]);

  return (
    <Section id="projects">
      <SectionDivider />

      <SectionTitle main>
        Projects
      </SectionTitle>
        <GridContainer>
          {projectsToDisplay.map(({ id, title, description, image, tags, visit, source }) => {
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
      
      {isLoading ? (
        <Loader />
      ) : (
        projectsToShow < projects.length && (
          <ShowMoreButton onClick={handleShowMore}>
            Show More
          </ShowMoreButton>
        )
      )}
    </Section>
  )
};

export default Projects;