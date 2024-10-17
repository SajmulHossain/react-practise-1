import React from 'react';

const Span = ({value,className}) => {
  return (
    <>
      <span className={className}>{value}</span>
    </>
  );
};

export default Span;