const THEME_PATH = `${process.env.PUBLIC_URL}/theme`;
const DEFAULT_THEME = 'light';

export const themeConfig = {
  default: DEFAULT_THEME,
  themeMap: {
    light: `${THEME_PATH}/light.theme.css`,
    dark: `${THEME_PATH}/dark.theme.css`
  }
};

export const createLinkEl = attrs => {
  const link = document.createElement('link');

  Object.keys(attrs).forEach(key => {
    if (key === 'onload') {
      link.onload = attrs.onload;
    }
    link[key] = attrs[key];
  });

  return link;
};

export const insertStyle = node => {
  document.head.insertBefore(node, document.head.children[0]);
};

export const getThemeKeys = () => {
  return Object.keys(themeConfig.themeMap).reduce((acc, key) => {
    acc[key] = key;
    return acc;
  }, {});
};
