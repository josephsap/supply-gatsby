import { memo } from 'react';

import boxStyles from './box.styles';

const styles = {
  cursor: 'grab',
  width: '630px',
  transform: 'rotate(4.5deg)',
};

export const Box = memo(function Box({ content, preview, isShown }) {
  return (
    <div
      style={{ ...styles }}
      role={preview ? 'BoxPreview' : 'Box'}
      className={`rich-text-body-copy ${isShown || preview ? `shown` : ``}`}
      css={boxStyles}
    >
      <span className="sticker-front"></span>
      <div className="sticker-content">{content}</div>
    </div>
  );
});
