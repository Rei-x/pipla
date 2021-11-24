/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const ImageWrapper: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
}> = ({ children, onClick }) => (
  <div
    className="image m-1 align-self-center"
    onClick={onClick}
    role="button"
    tabIndex={0}
  >
    {children}
  </div>
);

export default ImageWrapper;
