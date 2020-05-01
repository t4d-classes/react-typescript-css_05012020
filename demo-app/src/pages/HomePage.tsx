import React from 'react';

import { PageLayout } from '../components/PageLayout';

const HomeContent = () => {
  return (
    <>
      <header>
        <h2 className="section-header">Home</h2>
      </header>
      <div className="section-body">
        Content
      </div>
    </>
  );
};

const HomeSidebar = () => {
  return (
    <p>Home Sidebar</p>
  );
};

export const HomePage = () => <PageLayout Content={HomeContent} Sidebar={HomeSidebar} />