import React from 'react';
import { Menu } from 'antd';
import { GithubOutlined, AlertOutlined } from '@ant-design/icons';

import logo from 'assets/logo.png';
import { useThemeContext } from 'context/ThemeContext';
import { StyledHeader } from './Styles';

function Header() {
  const { currentTheme, switchTheme } = useThemeContext();

  const handleSwitchTheme = () => {
    switchTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  const openLinkRepo = () => [
    window.open('https://github.com/Nagai-Nano/otk-story', '_blank')
  ];

  return (
    <StyledHeader>
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <Menu mode="horizontal" selectedKeys={[]}>
        <Menu.Item
          key="1"
          className={
            currentTheme === 'light'
              ? 'menu-icon ant-menu-item-selected'
              : 'menu-icon'
          }
          onClick={handleSwitchTheme}
        >
          <AlertOutlined />
        </Menu.Item>
        <Menu.Item
          className="menu-icon"
          style={{ marginRight: 0 }}
          onClick={openLinkRepo}
        >
          <GithubOutlined />
        </Menu.Item>
      </Menu>
    </StyledHeader>
  );
}

export default Header;
