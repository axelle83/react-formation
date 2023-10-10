import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexHGrox.module.css';

const FlexHGrox = (props) => {
  return (
    <div className={styles.FlexHGrox} data-testid="FlexHGrox">
      {props.children}
    </div>
  );
};

FlexHGrox.propTypes = {
  children: PropTypes.any.isRequired,
};

FlexHGrox.defaultProps = {};

export default FlexHGrox;
