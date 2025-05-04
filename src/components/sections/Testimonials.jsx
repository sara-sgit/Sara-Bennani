import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const TestimonialContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: relative;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

const TestimonialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  position: relative;
`;

const Arrow = styled.div`
  font-size: 30px;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  user-select: none;
  padding: 10px;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const TestimonialText = styled.div`
  font-size: 18px;
  font-style: italic;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  max-width: 700px;
  margin: 0 20px;
  transition: opacity 0.3s ease-in-out;
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

const testimonials = [
  {
    text: `"Sara demonstrated exceptional skills in artificial intelligence, software development, and computer vision through her work on an intelligent plant disease detection system. Her deep understanding of machine learning models, feature selection techniques, and system deployment using Python reflects a high level of technical ability and dedication. She is among the most motivated individuals I’ve worked with."`,
    name: "Hassiba Nemmour",
    role: "Professor, Faculty of Electrical Engineering (USTHB)",
  },
  {
    text: `"Working with Sara was a truly rewarding experience. Her dedication, quick learning ability, and initiative were crucial to our success. She demonstrated strong problem-solving skills, effective collaboration, and the ability to exceed project expectations. I’m confident she will bring the same energy and professionalism to any future project."`,
    name: "Faiza Akrib",
    role: "Consulting engineer, SII Group",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <TestimonialContainer id="Testimonials">
      <Title>What Others Are Saying</Title>

      <TestimonialWrapper>
        <Arrow onClick={handlePrev}>&lt;</Arrow>

        <TestimonialText>
          {testimonials[currentIndex].text}
          <Name>{testimonials[currentIndex].name}</Name>
          <Role>{testimonials[currentIndex].role}</Role>
        </TestimonialText>

        <Arrow onClick={handleNext}>&gt;</Arrow>
      </TestimonialWrapper>
    </TestimonialContainer>
  );
};

export default TestimonialSection;
