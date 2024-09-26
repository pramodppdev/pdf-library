import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
