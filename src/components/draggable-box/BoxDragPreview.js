import { memo } from 'react';
import { Box } from './Box';
const styles = {
  display: 'inline-block',
  transform: 'rotate(4.5deg)',
  WebkitTransform: 'rotate(4.5deg)',
};
export const BoxDragPreview = memo(function BoxDragPreview({ content }) {
  return (
    <div className="box-preview" style={styles}>
      <Box content={content} preview />
    </div>
  );
});
