// import React, { FC } from 'react';
import styled from '@emotion/styled';

// import './Layout.css';

export const Layout = styled.main`
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;

  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 70px 40px auto 50px;
  grid-template-areas: 
    "header header"
    "menu menu"
    "content sidebar"
    "footer footer";
`;


// export const Layout: FC<{}> = ({ children }) => {

//   return (
//     <main>
//       {children}
//     </main>
//   );

// };