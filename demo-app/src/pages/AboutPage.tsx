import React from 'react';

import { PageLayout } from '../components/PageLayout';

const AboutContent = () => {
  return (
    <>
      <header>
        <h2 className="section-header">About</h2>
      </header>
      <div className="section-body">
        Content
      </div>
    </>
  );
};

const AboutSidebar = () => {
  return (
    <p>About Sidebar</p>
  );
};

export const AboutPage = () => <PageLayout Content={AboutContent} Sidebar={AboutSidebar} />