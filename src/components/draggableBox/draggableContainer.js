import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import DraggableBox from './draggableBox';
import update from 'immutability-helper';

const styles = {
  width: '100%',
  height: '600px',
  position: 'absolute',
  zIndex: 3,
  overflow: 'hidden',
};

const DraggableContainer = ({ content }) => {
  const [boxes, setBoxes] = useState({
    a: { top: 160, left: 113 },
  });

const [, drop] = useDrop(() => ({
  accept: 'box',
  drop(item, monitor) {
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);
    moveBox(item.id, left, top);
    return undefined;
  },
}));

const moveBox = (id, left, top) => {
  setBoxes(update(boxes, {
  [id]: {
    $merge: { left, top },
  },
  }));
};

return (
  <div ref={drop} style={styles}>
    {Object.keys(boxes).map((key) => {
      const { left, top } = boxes[key];

      return (
        <DraggableBox
          key={key}
          id={key}
          left={left}
          top={top} 
          hideSourceOnDrag={true}
        >
          <div className="rich-text-body-copy">{content}</div>
        </DraggableBox>
      );
    })}
  </div>
  );
};

export default DraggableContainer;