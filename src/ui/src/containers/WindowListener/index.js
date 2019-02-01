import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import useStore from '../../configureStore';

const WindowListener = props => {
  useEffect(() => {
    window.addEventListener('message', handleEvent);
    return function cleanup() {
      window.removeEventListener('message', handleEvent);
    };
  });

  const { setHidden, hidden } = useStore(state => state);
  const handleEvent = event => {
    const { action, type } = event.data;
    if (action == 'toggle' && type == 'UIToggle') {
      setHidden(!hidden);
    }
  };
  return <>{props.children}</>;
};

WindowListener.propTypes = {
  children: PropTypes.element.isRequired,
};

export default WindowListener;
