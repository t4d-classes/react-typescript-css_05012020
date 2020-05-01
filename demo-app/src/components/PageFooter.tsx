import React, { FC } from 'react';

import './PageFooter.css';

export const PageFooter: FC<{ companyName: string }> = ({ companyName }) => {

  return (
    <footer id="page-footer">
      <small>&copy; {new Date().getFullYear()} {companyName} All Rights Reserved.</small>
    </footer>
  );


};

// export default PageFooter;