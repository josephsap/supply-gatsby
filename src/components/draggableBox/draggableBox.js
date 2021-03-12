import { useDrag } from 'react-dnd';
// https://codesandbox.io/s/github/react-dnd/react-dnd/tree/gh-pages/examples_hooks_js/02-drag-around/custom-drag-layer?from-embed=&file=/src/CustomDragLayer.jsx

const style = {
  position: 'absolute',
  backgroundColor: '#FFE8E1',
  padding: '2rem',
  cursor: 'move',
  width: '630px',
  borderRadius: '8px',
  transform: 'rotate(4.5deg)',
  cursor: '-webkit-grab',
  cursor: 'grab',
};

const DraggableBox = ({ id, left, top, hideSourceOnDrag, children }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      item: { id, left, top, type: 'box' },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  );

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }

  return (
    <div ref={drag} style={{ ...style, left, top }} role="Box">
      {children}
    </div>
  );
};

export default DraggableBox;
