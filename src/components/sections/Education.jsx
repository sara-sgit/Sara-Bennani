import React from "react";
import styled from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";

// Matches the Experience section styling
const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: left;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
`;

const Education = () => {
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
     
        </Desc>

        <div>
          {education.map((edu, index) => (
            <div key={`education-${index}`} style={{ marginBottom: "30px" }}>
              <EducationCard education={edu} />
            </div>
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

export default Education;