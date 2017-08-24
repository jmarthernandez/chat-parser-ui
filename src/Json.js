import React from 'react';
import PropTypes from 'prop-types';

const Json = ({ data }) => (
  <pre className="json">
    {JSON.stringify(data, null, 2)}
  </pre>
);

const urlProp = PropTypes.shape({
  url: PropTypes.string,
  title: PropTypes.string,
});

Json.propTypes = {
  data: {
    mentions: PropTypes.arrayOf(PropTypes.string),
    emoticons: PropTypes.arrayOf(PropTypes.string),
    urls: PropTypes.arrayOf(urlProp),
  },
};

Json.defaultProps = {
  data: {
    mentions: [],
    emoticons: [],
    urls: [],
  },
};

export default Json;
