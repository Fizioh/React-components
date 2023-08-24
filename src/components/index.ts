// Importing the components from the respective folders
import BoxComponentJSX from './jsx-components/mui/BoxComponent';
import TypographyComponentJSX from './jsx-components/mui/TypographyComponent';
import ButtonComponentJSX from './jsx-components/mui/ButtonComponent';

import BoxComponentTSX from './tsx-components/mui/BoxComponent';
import TypographyComponentTSX from './tsx-components/mui/TypographyComponent';
import ButtonComponentTSX from './tsx-components/mui/ButtonComponent';

// Exporting the components organized by language (jsx/tsx) and name
export const Components = {
  jsx: {
    BoxComponent: BoxComponentJSX,
    TypographyComponent: TypographyComponentJSX,
    ButtonComponent: ButtonComponentJSX,
  },
  tsx: {
    BoxComponent: BoxComponentTSX,
    TypographyComponent: TypographyComponentTSX,
    ButtonComponent: ButtonComponentTSX,
  },
};

// Default export for simplified import
export default Components;