import React, { FC } from 'react';

import { Layout } from './Layout';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { MainMenu } from './MainMenu';
import { PageSidebar } from './PageSidebar';

import './PageLayout.css';

import { pages } from '../pages/pages';

export const PageLayout: FC<{
  Content: React.ComponentClass | FC,
  Sidebar?: React.ComponentClass | FC,
}> = ({ Content, Sidebar }) => {

  return (
    <Layout>
      <PageHeader headerText="Cool Company, Inc.">
        <small>A subsidiary of Uncool Companies, Inc...</small>
      </PageHeader>

      <MainMenu menuItems={pages} />

      <section id="content">
        <Content />
      </section>

      <aside id="sidebar">
        {Sidebar && <Sidebar />}
      </aside>

      <PageFooter companyName="Cool Company, Inc." />
    </Layout>
  );
};

PageLayout.defaultProps = {
  Sidebar: PageSidebar,
};
