import { memo } from 'react';

const styles = {
  cursor: 'move',
  backgroundColor: '#FFE8E1',
  padding: '2rem',
  cursor: 'move',
  width: '630px',
  borderRadius: '8px',
  transform: 'rotate(4.5deg)',
};

export const Box = memo(function Box({ content, preview }) {
  return (
    <div
      style={{ ...styles }}
      role={preview ? 'BoxPreview' : 'Box'}
      className="rich-text-body-copy"
    >
      {content}
    </div>
  );
});
