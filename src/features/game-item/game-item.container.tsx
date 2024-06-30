import { useDndMonitor, useDraggable } from '@dnd-kit/core';
import { memo, useState } from 'react';

import { IGameItemPosition } from '@/types/gameItem';
import { IGameItemContainerProps } from './types';
import { GameItem } from './game-item';

/**
 * Draggable item for the game field
 *
 * NOTE memo is used to prevent unnecessary re-renders when spawning new items.
 */
export const GameItemContainer: React.FC<IGameItemContainerProps> = memo(({ id, ...props }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });
  /**
   * NOTE I moved the current position from the parent "game-field" into this component. At first this position was stored
   * inside the `items` object, but this caused significant re-rendering of all items when one of them was moved.
   * This solution still causes re-rendering of all items when `onDragEnd` fires (dnd-kit limitation),
   * but significant re-rendering will only happen to the dragged item (other items just get a quick re-render).
   */
  const [currentPosition, setCurrentPosition] = useState<IGameItemPosition>(props.defaultPosition);

  useDndMonitor({
    onDragEnd: ({ delta, active }) => {
      if (active.id === id) {
        setCurrentPosition((prev) => ({
          top: prev.top + delta.y,
          left: prev.left + delta.x
        }));
      }
    }
  });

  return (
    <GameItem
      {...props}
      id={id}
      currentPosition={currentPosition}
      ref={setNodeRef}
      transform={transform}
      listeners={listeners}
      attributes={attributes}
      isDragging={isDragging}
    />
  );
});

GameItemContainer.displayName = 'GameItemContainer';
