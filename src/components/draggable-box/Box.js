import { memo } from 'react';

import boxStyles from './box.styles';

const styles = {
  cursor: 'move',
  backgroundColor: '#FFE8E1',
  padding: '2rem',
  cursor: 'move',
  width: '630px',
  borderRadius: '8px',
  transform: 'rotate(4.5deg)',
};

export const Box = memo(function Box({ content, preview, className }) {
  return (
    <div
      style={{ ...styles }}
      role={preview ? 'BoxPreview' : 'Box'}
      className={`rich-text-body-copy ${className}`}
      css={boxStyles}
    >
      {content}
    </div>
  );
});
