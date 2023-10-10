import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FlexWGrow.module.css';

const FlexWGrow = (props) => {
  const [state, setstate] = useState({});
  useEffect(() => {
    return () => {
    };
  }, [])
  return (
    <div className={styles.FlexWGrow} data-testid="FlexWGrow">
      FlexWGrow Component
    </div>
  );
};

FlexWGrow.propTypes = {};

FlexWGrow.defaultProps = {};

export default FlexWGrow;
