export interface ThemeApp {
  colors: {
    primary: string;
    primaryDark: string;
  };
  fonts: {
    main: string;
  };
  fontSizes: {
    title: string;
    subtitle: string;
    text: string;
  };
}

export const theme: ThemeApp = {
  colors: {
    primary: '#f0f4ef',
    primaryDark: '#344966',
  },
  fonts: {
    main: 'Poppins',
  },
  fontSizes: {
    title: '40px',
    subtitle: '24px',
    text: '16px',
  },
};
