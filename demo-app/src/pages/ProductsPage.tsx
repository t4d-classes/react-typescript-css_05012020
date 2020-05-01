import React from 'react';

import { PageLayout } from '../components/PageLayout';

const ProductsContent = () => {
  return (
    <>
      <header>
        <h2 className="section-header">Products</h2>
      </header>
      <div className="section-body">
        Content
      </div>
    </>
  );
};

const ProductsSidebar = () => {
  return (
    <p>Products Sidebar</p>
  );
};

export const ProductsPage = () => <PageLayout Content={ProductsContent} Sidebar={ProductsSidebar} />