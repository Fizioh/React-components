// TypographyComponent.jsx
import React from 'react';
import { Typography } from '@mui/material';

/**
 * A reusable Typography component with customizable props.
 *
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Content to be displayed within the Typography component
 * @param {TypographyProps} props.typographyProps - Other Typography component props
 * @returns {JSX.Element} - Typography component
 */
const TypographyComponent = ({ children, ...typographyProps }) => {
  return <Typography {...typographyProps}>{children}</Typography>;
};

export default TypographyComponent;
