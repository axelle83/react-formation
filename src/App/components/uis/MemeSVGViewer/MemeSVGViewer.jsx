import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeSVGViewer.module.css';

const MemeSVGViewer = (props) => {
  const [state, setstate] = useState({});
  useEffect(() => {
    return () => {
    };
  }, [])
  return (
    <div className={styles.MemeSVGViewer} data-testid="MemeSVGViewer">
      MemeSvgViewer Component
    </div>
  );
};

MemeSVGViewer.propTypes = {};

MemeSVGViewer.defaultProps = {};

export default MemeSVGViewer;
