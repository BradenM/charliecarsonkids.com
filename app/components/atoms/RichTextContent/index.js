/* eslint-disable react/no-danger */
/**
 *
 * RichTextContent
 *
 * Atom
 */

import { sanitize } from 'dompurify';
import draftToHTML from 'draftjs-to-html';
import PropTypes from 'prop-types';
import React from 'react';

const RichTextContent = ({ content }) => (
  <>
    {content && (
      <div
        dangerouslySetInnerHTML={{
          __html: sanitize(draftToHTML(JSON.parse(content))),
        }}
      />
    )}
  </>
);
RichTextContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default RichTextContent;
