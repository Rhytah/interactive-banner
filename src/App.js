import React, { useState } from 'react';
import Banner from './components/Banner';
import BannerForm from './components/BannerForm';
import './App.css';

function App() {
  const [bannerConfig, setBannerConfig] = useState({
    backgroundColor: '#07263c',
    textColor: '#ffffff',
    title: 'Anime: A World of Endless Imagination',

  description: 'Anime is more than just animation; it\'s a vibrant storytelling medium that explores complex emotions, diverse genres, and rich cultural narratives. From epic adventures to introspective slice-of-life stories, anime offers unique perspectives that transcend traditional storytelling boundaries.',
    imageUrl: 'https://images.unsplash.com/photo-1594007759138-855170ec8dc0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
});

  const handleConfigChange = (newConfig) => {
    setBannerConfig({
      ...bannerConfig,
      ...newConfig
    });
  };

  return (
    <div className="app">
      <Banner config={bannerConfig} />
      <BannerForm config={bannerConfig} onConfigChange={handleConfigChange} />
    </div>
  );
}

export default App;