import React from 'react';
import * as styles from './styles.js';

function Banner({ config }) {
  const { backgroundColor, textColor, title, description, imageUrl } = config;

  return (
    <styles.BannerWrapper 
      $backgroundColor={backgroundColor} 
      data-testid="banner"
    >
      <styles.BannerContent>
        <styles.TextContent $textColor={textColor}>
          <styles.Title>{title}</styles.Title>
          <styles.Description>{description}</styles.Description>
        </styles.TextContent>
        {imageUrl && (
          <styles.ImageContainer>
            <styles.BannerImage 
              src={imageUrl} 
              alt="Banner illustration" 
              data-testid="banner-image"
            />
          </styles.ImageContainer>
        )}
      </styles.BannerContent>
    </styles.BannerWrapper>
  );
}

export default Banner;