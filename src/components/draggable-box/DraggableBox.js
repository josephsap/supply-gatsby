import { memo, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { Box } from './Box';

function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : '',
  };
}

export const DraggableBox = memo(function DraggableBox(props) {
  const { id, content, left, top, isShown } = props;
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      item: { id, left, top, content, type: 'box' },
      collect: (DragSourceMonitor) => ({
        isDragging: DragSourceMonitor.isDragging(),
      }),
    }),
    [id, left, top, content, isDragging]
  );

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return (
    <div
      ref={drag}
      style={getStyles(left, top, isDragging)}
      role="DraggableBox"
    >
      <Box isShown={isShown} content={content} />
    </div>
  );
});
