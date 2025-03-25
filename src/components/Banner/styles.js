import styled from 'styled-components';

const BannerWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  background-color: ${props => props.$backgroundColor};
`;

const BannerContent = styled.div`
  display: flex;
  padding: 30px;
  height: 100%;
  min-height: 300px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.$textColor};
`;

const Title = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding-left: 0;
  }
`;

const BannerImage = styled.img`
  max-width: 100%;
  width: 100%;
  max-height: 250px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`;

export { BannerWrapper, BannerContent, TextContent, Title, Description, ImageContainer, BannerImage };
