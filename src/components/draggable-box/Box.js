import { memo } from 'react';

import boxStyles from './box.styles';

const styles = {
  cursor: 'move',
  width: '630px',
  transform: 'rotate(4.5deg)',
};

export const Box = memo(function Box({ content, preview, className }) {
  return (
    <div
      style={{...styles}}
      role={preview ? 'BoxPreview' : 'Box'}
      className={`rich-text-body-copy ${className}`}
      css={boxStyles}
    > 
      <span className="sticker-front"></span>
      <div className="sticker-content">
        {content}
      </div>
    </div>
  );
});
