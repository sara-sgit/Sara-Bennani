import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import ExperienceCard from "../cards/ExperienceCard";

// Container to center everything with a simpler design
const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

// Wrapping the whole experience section without the external frame
const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: left; // changed from center
  margin: 0 auto;
  padding: 20px;
`;

// Simplified title styling
const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

// Short and clear description with updated font size
const Desc = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
        
        </Desc>

        <div>
          {experiences.map((experience, index) => (
            <div key={`experience-${index}`} style={{ marginBottom: "30px" }}>
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

export default Experience;
