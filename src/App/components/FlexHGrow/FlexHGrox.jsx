import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FlexHGrox.module.css';

const FlexHGrox = (props) => {
  const [state, setstate] = useState({});
  useEffect(() => {
    return () => {
    };
  }, [])
  return (
    <div className={styles.FlexHGrox} data-testid="FlexHGrox">
      FlexHGrox Component
    </div>
  );
};

FlexHGrox.propTypes = {};

FlexHGrox.defaultProps = {};

export default FlexHGrox;
