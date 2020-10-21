import React from 'react';
import { Switch } from 'antd';

import logo from 'assets/logo.png';
import { useThemeContext } from 'context/ThemeContext';
import { StyledHeader } from './Styles';

function Header() {
  const { currentTheme, switchTheme, status } = useThemeContext();

  const handleSwitchTheme = () => {
    switchTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <StyledHeader>
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <Switch
        disabled={status === 'loading'}
        checkedChildren="light"
        unCheckedChildren="dark"
        checked={currentTheme === 'light'}
        onChange={handleSwitchTheme}
      />
    </StyledHeader>
  );
}

export default Header;
