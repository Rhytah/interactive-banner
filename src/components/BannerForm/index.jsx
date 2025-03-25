import React from 'react';
import * as styles from './styles.js';

function BannerForm({ config, onConfigChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onConfigChange({ [name]: value });
  };

  return (
    <styles.FormWrapper data-testid="banner-form">
      <styles.FormTitle>Customize Banner</styles.FormTitle>
      <form>
      <styles.FlexContainer>

        <styles.FormGroup>
          <styles.Label htmlFor="backgroundColor">Background Color:</styles.Label>
          <styles.Input
            type="color"
            id="backgroundColor"
            name="backgroundColor"
            value={config.backgroundColor}
            onChange={handleChange}
            data-testid="background-color-input"
          />
        </styles.FormGroup>

        <styles.FormGroup>
          <styles.Label htmlFor="textColor">Text Color:</styles.Label>
          <styles.Input
            type="color"
            id="textColor"
            name="textColor"
            value={config.textColor}
            onChange={handleChange}
            data-testid="text-color-input"
          />
        </styles.FormGroup>
        </styles.FlexContainer>
          <styles.FormGroup>
            <styles.Label htmlFor="title">Title:</styles.Label>
            <styles.Input
            type="text"
            id="title"
            name="title"
            value={config.title}
            onChange={handleChange}
            data-testid="title-input"
          />
        </styles.FormGroup>
        <styles.FormGroup>
          <styles.Label htmlFor="imageUrl">Image URL:</styles.Label>
          <styles.Input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={config.imageUrl}
            onChange={handleChange}
            placeholder="Enter image URL"
            data-testid="image-url-input"
          />
          </styles.FormGroup>
        <styles.FormGroup>
          <styles.Label htmlFor="description">Description:</styles.Label>
          <styles.Textarea
            id="description"
            name="description"
            value={config.description}
            onChange={handleChange}
            rows="4"
            data-testid="description-input"
          />
        </styles.FormGroup>

       
      </form>
    </styles.FormWrapper>
  );
}


export default BannerForm;