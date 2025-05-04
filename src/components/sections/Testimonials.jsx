import React from "react";
import styled from "styled-components";

// Styled components for the testimonial section
const TestimonialContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

const TestimonialText = styled.div`
  font-size: 18px;
  font-style: italic;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  max-width: 800px;
  margin-bottom: 30px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 15px;
`;

const Role = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const TestimonialSection = () => {
  return (
    <TestimonialContainer id="Testimonials">
      <Title>What Others Are Saying</Title>
      
      {/* Testimonial 1 */}
      <TestimonialText>
        "Sara demonstrated exceptional skills in artificial intelligence, software development, and computer vision through her work on an intelligent plant disease detection system. Her deep understanding of machine learning models, feature selection techniques, and system deployment using Python reflects a high level of technical ability and dedication. She is among the most motivated individuals I’ve worked with"
        <Name>Hassiba Nemmour </Name>
        <Role>Professor, Faculty of Electrical Engineering(USTHB)</Role>
      </TestimonialText>

    </TestimonialContainer>
  );
};

export default TestimonialSection;
