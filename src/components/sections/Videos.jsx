import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 60px 20px 40px;
  background-color: #f9f9f9;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 40px;
`;

const VideosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

const VideoFrame = styled.div`
  width: 100%;
  max-width: 320px;
  aspect-ratio: 16 / 9;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
  }
`;

const Videos = () => {
  return (
    <Container>
      <Title>Learn with Me on Sara's Data Path</Title>
      <VideosWrapper>
        <VideoFrame>
          <iframe
            src="https://www.youtube.com/embed/UEN8bKfQSFY"
            title="Video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoFrame>
        <VideoFrame>
          <iframe
            src="https://www.youtube.com/embed/51WbNxCeJzo"
            title="Video 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoFrame>
        <VideoFrame>
          <iframe
            src="https://www.youtube.com/embed/YNaYFUoQqPc"
            title="Video 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoFrame>
      </VideosWrapper>
    </Container>
  );
};

export default Videos;
