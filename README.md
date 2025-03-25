# Banner Form App

This interactive web application allows users to customize a banner that displays content about Anime (one of my interests). Users can modify various aspects of the banner in real-time without page reloading.

## Features

- **Dynamic Banner:** Full-width banner that displays content about Anime
- **Interactive Form:** Control panel that allows real-time customization of:
  - Banner background color
  - Text color
  - Banner title and description
  - Banner image

## Technologies Used

- **React:** Front-end library for building the user interface
- **CSS:** Custom styling for all components
- **Jest & React Testing Library:** For unit testing components

## Project Structure

```
interactive-banner-app/
├── src/
│   ├── components/
│   │   ├── Banner/
│   │   │   ├── __tests__/
│   │   │   │   ├── Banner.test.js
│   │   │   ├── styles.js
│   │   │   └── index.js
│   │   ├── BannerForm/
│   │   │   ├── __tests__/
│   │   │   │   ├── BannerForm.test.js
│   │   │   ├── styles.js
│   │   │   └── index.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/Rhytah/interactive-banner.git interactive-banner-app
   cd interactive-banner-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Run tests:
   ```
   npm test
   ```

## How It Works

The application uses React's state management to handle the banner configuration. When a user makes changes through the form inputs, the state is updated, which immediately reflects in the banner component without requiring a page reload.

### Components

1. **App.js:** The main component that manages the state and renders both the Banner and BannerForm components.
2. **Banner.js:** Displays the customizable banner with dynamic styling based on the configuration.
3. **BannerForm.js:** Provides a form interface for users to modify the banner's properties.

## Testing

The application includes unit tests for all components to ensure functionality works as expected. Tests cover:

- Rendering of components with correct props
- User interactions changing the banner appearance
- Form input validation and state updates

## Future Enhancements

Potential improvements that could be added:
- Save configuration to local storage
- Add preset themes
- Implement responsive design for mobile devices
- Add animation options for the banner