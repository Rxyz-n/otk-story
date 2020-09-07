import React from 'react';

import { useThemeContext } from './context/ThemeContext';

function App() {
  const theme = useThemeContext();
  console.log(theme);
  return (
    <div className="App" onClick={() => theme.switchTheme('dark')}>
      Hello
    </div>
  );
}

export default App;
