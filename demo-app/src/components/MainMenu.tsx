/** @jsx jsx */
import { FC } from 'react';
import { MenuItem } from '../models/menu';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
 
// import './MainMenu.css';

const MainMenuWrapper = styled.nav<{ bgColor: string }>`
  grid-area: menu;
  position: relative;
  background-color: ${props => props.bgColor};
`;

const ulcss = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
`;

export const MainMenu: FC<{ menuItems: MenuItem[] }> = ({ menuItems }) => {

  return (
    <MainMenuWrapper id="main-menu" bgColor="orange">
      <ul css={ulcss}>
        {menuItems.map( (menuItem, i) =>
          <li key={i} css={css`padding: 6px;border: 1px;`}>
            <Link to={menuItem.url}>{menuItem.caption}</Link>
          </li>)}
      </ul>
    </MainMenuWrapper>
  );

};