// ButtonComponent.jsx
import React from 'react';
import { Button } from '@mui/material';

/**
 * A reusable button component with customizable color variant and click event handler.
 *
 * @param {Object} props - Component properties
 * @param {'primary' | 'secondary'} [props.color='primary'] - Color variant of the button
 * @param {function} [props.onClick] - Click event handler for the button
 * @param {React.ReactNode} props.children - Content of the button
 * @returns {JSX.Element} - Button component
 */
const ButtonComponent = ({ color = 'primary', onClick, children }) => {
  return (
    <Button color={color} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonComponent;