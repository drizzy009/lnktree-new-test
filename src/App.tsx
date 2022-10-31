import React from 'react';
import Profile from './components/Profile';
import Links from './components/Links';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className='p-6 '>
      <Profile />
      <Links />
      <SocialSection />
      <Footer />
    </div>
  );
}

export default App;
