// BoxComponent.jsx
import React from 'react';
import { Box } from '@mui/material';

/**
 * A reusable box component with customizable background color, width, height, and inline styles.
 *
 * @param {Object} props - Component properties
 * @param {string} [props.backgroundColor='lightgray'] - Background color of the box
 * @param {string} [props.width='200px'] - Width of the box
 * @param {string} [props.height='200px'] - Height of the box
 * @param {CSSProperties} [props.style] - Additional inline styles for the box
 * @returns {JSX.Element} - Box component
 */
const BoxComponent = ({ backgroundColor = 'lightgray', width = '200px', height = '200px', style }) => {
  // Combine default and custom styles
  const boxStyle = {
    backgroundColor,
    width,
    height,
    ...style,
  };

  return <Box style={boxStyle} />;
};

export default BoxComponent;
