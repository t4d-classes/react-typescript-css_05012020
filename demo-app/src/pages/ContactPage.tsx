import React from 'react';

import { PageLayout } from '../components/PageLayout';

const ContactContent = () => {
  return (
    <>
      <header>
        <h2 className="section-header">Contact</h2>
      </header>
      <div className="section-body">
        Content
      </div>
    </>
  );
};

const ContactSidebar = () => {
  return (
    <p>Contact Sidebar</p>
  );
};

export const ContactPage = () => <PageLayout Content={ContactContent} Sidebar={ContactSidebar} />