import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

// ===== STYLED COMPONENTS ===== //
const HoverWrapper = styled.div`
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); // softer shadow for light theme
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
  background: ${({ theme }) => theme.bg || "#fff"};
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.text_secondary || "#ccc"};
  }
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary || "#1a1a1a"};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
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

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary || "#1a1a1a"};
  margin-bottom: 10px;
  text-align: left;
  padding: 0 8px;

  ul {
    padding-left: 20px;
    margin: 8px 0;
    list-style-type: none;
  }

  li {
    position: relative;
    margin-bottom: 8px;
    line-height: 1.5;
    padding-left: 20px;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.primary || "#0070f3"};
      font-weight: bold;
    }
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 12px;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 8px;
`;

const Skill = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary || "#1a1a1a"};
  background: ${({ theme }) => theme.primary + "20" || "#e6f0ff"};
  padding: 4px 12px;
  border-radius: 12px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 2px 8px;
  }
`;

// ===== MAIN COMPONENT ===== //
const ExperienceCard = ({ experience }) => {
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
            <img src={experience.img} alt={experience.company} />
          </Logo>
          <Body>
            <Role>{experience.role}</Role>
            <Company>{experience.company}</Company>
            <Date>{experience.date}</Date>
          </Body>
        </Top>

        <Description>
          {experience?.descPoints && (
            <ul>
              {experience.descPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}

          {experience?.skills && (
            <Skills>
              <span style={{ fontWeight: 600 }}>Skills:</span>
              {experience.skills.map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
              ))}
            </Skills>
          )}
        </Description>
      </VerticalTimelineElement>
    </HoverWrapper>
  );
};

export default ExperienceCard;
