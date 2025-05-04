import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

// ===== STYLED COMPONENTS ===== //
const HoverWrapper = styled.div`
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); // lighter shadow
  }
`;

const Logo = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  padding: 4px;
  background: ${({ theme }) => theme.bg || "#ffffff"};
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.text_secondary || "#ccc"};
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 8px;
`;

const School = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary || "#1a1a1a"};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary || "#666"};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary || "#666"};
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 8px;
  color: ${({ theme }) => theme.text_primary || "#1a1a1a"};
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary || "#1a1a1a"};
  margin-top: 12px;
  line-height: 1.5;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

// ===== MAIN COMPONENT ===== //
const EducationCard = ({ education }) => {
  return (
    <HoverWrapper>
      <VerticalTimelineElement
        iconStyle={{ display: 'none' }}
        contentStyle={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          background: "#ffffff",
          color: "#1a1a1a",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          border: "1px solid #eaeaea",
          borderRadius: "8px",
          textAlign: "left",
          padding: "16px 20px",
        }}
        contentArrowStyle={{
          borderRight: "7px solid #ffffff",
        }}
      >
        <Top>
          <Logo>
            <img src={education.img} alt={education.school} />
          </Logo>
          <Body>
            <School>{education.school}</School>
            <Degree>{education.degree}</Degree>
            <Date>{education.date}</Date>
          </Body>
        </Top>

        {education.desc && (
          <Description>{education.desc}</Description>
        )}
      </VerticalTimelineElement>
    </HoverWrapper>
  );
};

export default EducationCard;
