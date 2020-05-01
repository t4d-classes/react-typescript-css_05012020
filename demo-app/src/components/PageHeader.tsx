import React, { FC } from 'react';

import styled from '@emotion/styled';

// import './PageHeader.css';

const PageHeaderWrapper = styled.header`
  grid-area: header;
  background-color: navy;
  padding: 10px;
`;

// const pageHeaderStyles = {
//   gridArea: 'header',
//   backgroundColor: 'navy',
//   padding: '10px',
// }

const PageHeaderTextWrapper = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
`;

export const PageHeader: FC<{ headerText: string }> = ({ headerText, children }) => {

  return (
    <PageHeaderWrapper id="page-header">
      <PageHeaderTextWrapper>{headerText}</PageHeaderTextWrapper>
      {children}
    </PageHeaderWrapper>
  );

}